import React, { FunctionComponent, useState } from "react";
import styles from "../styles/Home.module.scss";
import { Props } from "../types/props";

const CTA: FunctionComponent<Props> = ({ lightTheme }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO handle submit
  };
  return (
    <form className={styles.container_cta} onSubmit={handleSubmit}>
      <input
        type="text"
        className={
          lightTheme
            ? `${styles.input} ${styles.input_dark}`
            : `${styles.input}`
        }
        placeholder="Wpisz swój email..."
        required
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className={styles.button}>Subskrybuj</button>
    </form>
  );
};

export default CTA;
