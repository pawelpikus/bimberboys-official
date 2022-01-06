import axios from "axios";
import React, { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../styles/Home.module.scss";
import {
  ICheckboxInputs,
  IFormInputs,
  ISubscribeInputs,
  Props,
} from "../types/props";
import Checkbox from "./Checkbox";

const CTA: FunctionComponent<Props> = ({ lightTheme }) => {
  const [ischecked, setisChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICheckboxInputs & IFormInputs>({
    criteriaMode: "all",
  });
  const onSubmit: SubmitHandler<ISubscribeInputs> = async (data) => {
    try {
      const response = await axios.post("/api/subscribe", {
        email: data.email,
      });
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  // const onError = (errors, e) => console.log(errors, e);
  return (
    <form
      className={
        lightTheme
          ? `${styles.container_cta} ${styles.container_cta__light}`
          : `${styles.container_cta}`
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.col}>
        <input
          type="text"
          id="email"
          className={
            lightTheme
              ? `${styles.input} ${styles.input_dark}`
              : `${styles.input}`
          }
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
        <button className={styles.button}>Subskrybuj</button>
      </div>
    </form>
  );
};

export default CTA;
