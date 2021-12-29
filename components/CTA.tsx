import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.scss";
import { ICheckboxInputs, IFormInputs, Props } from "../types/props";
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
  const onSubmit = (data: {}) => {
    console.log(JSON.stringify(data));
    //TODO handle submit
  };
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
