import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Layout } from "../components";
import Image from "next/image";
import logo from "../public/bimber-logo2.png";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadContent from "../components/HeadContent";

const Home = () => {
  return (
    <>
      <Head>
        <HeadContent title="Bimber Boys - Official Page" />
      </Head>

      <Layout>
        <div className={styles.main_container}>
          <div className={styles.content}>
            <div className={styles.img_container}>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Image
                  src={logo}
                  alt="Bimber Boys logo"
                  layout="intrinsic"
                  placeholder="blur"
                  priority
                />
              </motion.div>
            </div>
          </div>
          <CookieConsent
            location="bottom"
            buttonText="Rozumiem"
            cookieName="cookieConsent"
            style={{ background: "#2B373B", fontSize: "13px" }}
            buttonStyle={{
              background: "#e5383bda",
              color: "#f5f3f4",
              fontSize: "13px",
            }}
            expires={150}
          >
            Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
            poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na
            ich użycie.{" "}
            <span style={{ fontSize: "10px" }}>
              <Link href="/polityka-cookies">
                <a className={styles.link}>Polityka Cookies</a>
              </Link>
            </span>
          </CookieConsent>
        </div>
      </Layout>
    </>
  );
};

export default Home;
