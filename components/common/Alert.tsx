import React, { useState } from "react";
import styles from "../../styles/Alert.module.scss";

type Props = {
  text: string;
};

export const AlertBanner = ({ text }: Props) => {
  const [open, setOpen] = useState(true);
  console.log(open);
  return open ? (
    <div className={styles.alert_container} role="alert">
      <p className={styles.alert_text}>
        <strong>A niech to!</strong>
      </p>
      <p className={styles.alert_text}>{text}</p>
      <span onClick={() => setOpen(false)} className={styles.exit_button}>
        <svg
          className={styles.svg_container}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Zamknij</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  ) : null;
};
