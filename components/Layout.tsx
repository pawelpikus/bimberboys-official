import { Props } from "../types/props";
import { Navbar, Footer, CTA } from "../components";
import styles from "../styles/Home.module.scss";

const Layout = ({ children, ...lightTheme }: Props) => {
  return (
    <div className={styles.page_container}>
      <div>
        <div className={styles.header_container}>
          <section className={styles.content}>
            <Navbar {...lightTheme} />
          </section>
        </div>
      
        {children}
      
        <section className={styles.content}>
            <CTA />
        </section>
      </div>
      <div className={styles.footer_container}>
        <section className={styles.content}>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Layout;
