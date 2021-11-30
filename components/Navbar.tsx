import { FunctionComponent } from "react";
import { Props } from "../types/props";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Navbar: FunctionComponent<Props> = ({ children }) => {
  return (
    <header className={styles.header}>
      <button className={styles.nav_toggle} aria-label="toggle navigation">
        <span className={styles.hamburger}></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">
              <a className={styles.nav_link}>
                <span className={styles.logo}>
                  <FontAwesomeIcon icon={faHome} />
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.nav_link}>O nas</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.nav_link}>Posłuchaj</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.nav_link}>Galeria</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.nav_link}>Kontakt</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#">
              <a className={styles.nav_link}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.nav_link}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Link>
          </li>
        </ul>
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
