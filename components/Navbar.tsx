import { FunctionComponent, useEffect, useState } from "react";
import { Props } from "../types/props";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Navbar: FunctionComponent<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(`${styles.nav_open}`, isOpen);
    return () => document.body.classList.remove(`${styles.nav_open}`);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <button
        className={styles.nav_toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="toggle navigation"
      >
        <span className={styles.hamburger}></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                <span className={styles.logo}>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                O nas
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                Posłuchaj
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                Galeria
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                Kontakt
              </a>
            </Link>
          </li>
          <div className={styles.container_social}>
            <li>
              <Link href="/">
                <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </Link>
            </li>
          </div>
        </ul>
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
