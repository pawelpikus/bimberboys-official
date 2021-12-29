import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import styles from "../styles/Form.module.scss";
import { CheckboxProps } from "../types/props";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  setChecked,
  checked,
  checkboxMessage,
  requiredMessage,
  register,
  name,
  errors,
}) => {
  return (
    <>
      <div className={styles.terms_wrapper}>
        <label className={styles.terms_label}>
          <input
            id={name}
            className={styles.terms}
            type="checkbox"
            onClick={() => setChecked(!checked)}
            {...register(name, {
              required: requiredMessage,
            })}
          />

          {checked && (
            <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
          )}
        </label>
        <section className={styles.label}>
          <span>{checkboxMessage}</span>
          <span> </span>
          <Link href="/">
            <a className={styles.link}>Polityka Prywatności</a>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Checkbox;
