import { Props } from "../types/props";
import { Navbar, Footer, CTA } from "../components";
import styles from "../styles/Home.module.scss";

const Layout = ({ children, ...lightTheme }: Props) => {
  return (
    <div className={styles.page_container}>
      <div className={styles.header_container}>
        <main className={styles.main}>
          <Navbar {...lightTheme} />
        </main>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.footer_container}>
        <main className={styles.main}>
          <CTA />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
