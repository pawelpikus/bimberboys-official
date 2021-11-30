import { FunctionComponent } from "react";
import styles from "../styles/Home.module.scss";
import { Props } from "../types/props";

const CTA: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container_cta}>
      <input
        type="text"
        className={styles.input}
        placeholder="Wpisz swój email..."
      />
      <button className={styles.button}>Subskrybuj</button>
    </div>
  );
};

export default CTA;
