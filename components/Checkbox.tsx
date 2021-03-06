import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ROUTES } from "../routes/routes";
import styles from "../styles/Form.module.scss";
import { CheckboxProps } from "../types/props";

export const Checkbox = ({
  setChecked,
  checked,
  checkboxMessage,
  requiredMessage,
  register,
  name,
  index,
}: CheckboxProps) => {
  const handleClick = () => {
    const updatedState = checked.map((item, i) => (i === index ? !item : item));
    setChecked(updatedState);
  };

  return (
    <>
      <div className={styles.terms_wrapper}>
        <label className={styles.terms_label} htmlFor={name}>
          <input
            id={name}
            className={styles.terms}
            type="checkbox"
            onClick={handleClick}
            {...register(name, {
              required: requiredMessage,
            })}
          />
          {checked[index] && (
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
