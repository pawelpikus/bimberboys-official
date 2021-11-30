import { FunctionComponent } from "react";
import styles from "../styles/Home.module.scss";
import { Props } from "../types/props";

const CTA: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.cta}>call to action</h3>
    </div>
  );
};

export default CTA;
