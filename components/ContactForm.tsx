import styles from "../styles/Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICheckboxInputs, IFormInputs } from "../types/props";
import { useState } from "react";
import Checkbox from "./Checkbox";

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

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(JSON.stringify(data));
    setMessage(`${data.name}, dziękujemy za wysłanie wiadomości!`);
    reset();
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
          <span>
            Wypełnienie formularza oznacza wyrażenie zgody na przetwarzanie
            przez Bimber Boys podanych w formularzu danych osobowych w celu
            udzielenia odpowiedzi na zadane pytanie i w zależności od treści
            zapytania przedstawienia oferty.{" "}
          </span>
          <Checkbox
            lightTheme
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
        <button className={styles.button}>Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;
