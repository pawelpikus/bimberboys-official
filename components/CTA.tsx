import React, { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../styles/Home.module.scss";
import {
  ICheckboxInputs,
  IFormInputs,
  ISubscribeInputs,
  CTAProps,
} from "../types/props";
import Checkbox from "./Checkbox";
import parse from "html-react-parser";

const CTA: FunctionComponent<CTAProps> = ({ status, message, onValidated }) => {
  const [ischecked, setisChecked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckboxInputs & IFormInputs>({
    criteriaMode: "all",
  });
  const onSubmit: SubmitHandler<ISubscribeInputs> = (data) => {
    data.email &&
      onValidated({
        MERGE0: data.email,
      });
    reset();
    setisChecked(false);
  };

  return (
    <div className={styles.container_form}>
      {status === "success" && (
        <p className={styles.message}>
          Dziękujemy za dołączenie do newslettera!
        </p>
      )}
      {status === "error" && (
        // @ts-ignore
        <p className={styles.error_msg}>{parse(message)}</p>
      )}
      {status === "sending" && <p>Wysyłam...</p>}
      <form className={styles.container_cta} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.col}>
          <input
            type="text"
            id="email"
            className={styles.input}
            placeholder="Wpisz swój email..."
            {...register("email", {
              required: "To pole jest wymagane!",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Niepoprawny adres email!",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
          <Checkbox
            lightTheme
            name="acceptTerms"
            setChecked={setisChecked}
            checked={ischecked}
            checkboxMessage="Wyrażam zgodę na newsletter. "
            requiredMessage="Zgoda jest wymagana!"
            register={register}
          />
          {errors.acceptTerms && (
            <span className={styles.error}>{errors.acceptTerms.message}</span>
          )}
        </div>
        <div className={styles.col}>
          <button disabled={status === "sending"} className={styles.button}>
            Dołącz do newslettera
          </button>
        </div>
      </form>
    </div>
  );
};

export default CTA;
