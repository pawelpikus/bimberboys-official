import styles from "../styles/Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICheckboxInputs, IFormInputs } from "../types/props";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Botpoison from "@botpoison/browser";
import axios from "axios";

const FORMSPARK_ACTION_URL = process.env.NEXT_FORMSPARK_ACTION_URL;
const botpoisonPublicKey = process.env.NEXT_BOTPOISON_PUBLIC_KEY;
const botpoison = new Botpoison({
  publicKey: botpoisonPublicKey || "",
});

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckboxInputs & IFormInputs>({
    criteriaMode: "all",
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setSubmitting(true);
    const { solution } = await botpoison.challenge();
    try {
      if (FORMSPARK_ACTION_URL && botpoisonPublicKey)
        await axios.post(FORMSPARK_ACTION_URL, {
          name: data.name,
          email: data.email,
          message: data.message,
          _botpoison: solution,
        });
      setMessage(`${data.name}, dziękujemy za wysłanie wiadomości!`);
      reset();
      setSubmitting(false);
      setChecked(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <p className={styles.message}>{message}</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor="name">
            Imię i nazwisko
          </label>
          <input
            id="name"
            className={styles.input_field}
            type="text"
            {...register("name", {
              required: "To pole jest wymagane!",
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor="email">
            Adres email
          </label>
          <input
            id="email"
            className={styles.input_field}
            type="email"
            {...register("email", {
              required: "To pole jest wymagane!",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Niepoprawny adres email!",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor="message">
            Wiadomość
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            {...register("message", {
              required: "To pole jest wymagane!",
            })}
          ></textarea>
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </div>
        <section className={styles.label}>
          <p>
            Wypełnienie formularza oznacza wyrażenie zgody na przetwarzanie
            przez Bimber Boys podanych w formularzu danych osobowych w celu
            udzielenia odpowiedzi na zadane pytanie i w zależności od treści
            zapytania przedstawienia oferty.{" "}
          </p>
          <Checkbox
            name="acceptTerms"
            setChecked={setChecked}
            checked={checked}
            checkboxMessage="Rozumiem i akceptuję. "
            requiredMessage="Zgoda jest wymagana!"
            register={register}
          />
          {errors.acceptTerms && (
            <span className={styles.error}>{errors.acceptTerms.message}</span>
          )}
        </section>
        <button
          disabled={submitting}
          className={
            submitting
              ? `${styles.button} ${styles.disabled}`
              : `${styles.button}`
          }
        >
          {submitting ? "Wysyłanie..." : "Wyślij"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
