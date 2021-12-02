import { Props } from "../types/props";
import { Navbar, Footer } from "../components";
import styles from "../styles/Home.module.scss";

const Layout = ({ children, ...lightTheme }: Props) => {
  return (
    <main className={styles.main}>
      <Navbar {...lightTheme} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
