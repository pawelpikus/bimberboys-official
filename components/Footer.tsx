import styles from "../styles/Home.module.scss";
import { FunctionComponent } from "react";
import { Props } from "../types/props";

const Footer: FunctionComponent<Props> = ({ lightTheme }) => {
  return (
    <footer
      className={
        lightTheme
          ? `${styles.footer} ${styles.footer_lightTheme}`
          : `${styles.footer}`
      }
    >
      <p>
        © 2022 by Bimber Boys. <br />
        Proudly created by Pawel Pikus
      </p>
    </footer>
  );
};

export default Footer;
