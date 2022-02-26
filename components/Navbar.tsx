import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { links, socialLinks } from "../data/links";

export const Navbar = () => {
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
      <nav className={`${styles.nav}`}>
        <ul className={styles.nav_list}>
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.route}>
                <a onClick={() => setIsOpen(false)} className={styles.nav_link}>
                  {link.text}
                </a>
              </Link>
            </li>
          ))}

          <div className={styles.container_social}>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={link.route}
                onClick={() => setIsOpen(false)}
                className={styles.nav_link}
              >
                {link.text}
              </a>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};
