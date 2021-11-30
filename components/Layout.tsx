import { Props } from "../types/props";
import { Navbar, Footer, CTA } from "../components";
import styles from "../styles/Home.module.scss";

const Layout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
      <CTA />
      <Footer />
    </main>
  );
};

export default Layout;
