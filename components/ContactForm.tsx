import styles from "../styles/Form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFormInputs } from "../types/props";
import { useState } from "react";

const ContactForm = () => {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(JSON.stringify(data));
    setMessage(`Dziękujemy ${data.name} za wysłanie wiadomości!`);
    reset();
    setChecked(false);
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

        <div className={styles.terms_wrapper}>
          <label className={styles.terms_label} htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              className={styles.terms}
              type="checkbox"
              onClick={() => setChecked((prev) => !prev)}
              {...register("acceptTerms", {
                required: "Zaakceptuj Warunki",
              })}
            />

            {checked && (
              <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
            )}
          </label>
          <span className={styles.label}>Zaakceptuj Warunki Użytkowania</span>
        </div>
        {errors.acceptTerms && (
          <p className={styles.error}>{errors.acceptTerms.message}</p>
        )}

        <button className={styles.button}>Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;
