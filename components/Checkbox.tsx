import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { ROUTES } from "../routes/routes";
import styles from "../styles/Form.module.scss";
import { CheckboxProps } from "../types/props";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  setChecked,
  checked,
  checkboxMessage,
  requiredMessage,
  register,
  name,
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
        <div className={styles.label}>
          <p className={styles.checkbox_msg}>{checkboxMessage}</p>
          <Link href={ROUTES.POLITYKA_PRYWATNOSCI}>
            <a className={styles.link}>Polityka Prywatności</a>
          </Link>
          &amp;
          <Link href={ROUTES.POLITYKA_COOKIES}>
            <a className={styles.link}>Cookies</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
