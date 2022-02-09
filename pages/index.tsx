import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Layout } from "../components";
import Image from "next/image";
import logo from "../public/bimber-logo2.png";
import marek from "../public/marek-sm.webp";
import band from "../public/bartol-tulik-krzysiek.webp";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - Official Page</title>
        <meta
          name="description"
          content="Oficjalna strona zespołu Bimber Boys... czyli retro and folk band. Naszą specjalnością są stare, niezapomniane przeboje w akustycznych aranżacjach. Inspirują nas szlagiery dwudziestolecia międzywojennego, miejski folk z różnych stron świata oraz... poetyckie ballady."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
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
