import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/About.module.scss";
import { Layout, CTA } from "../components";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - O Nas</title>
        <meta
          name="description"
          content="Oficjalna strona zespołu Bimber Boys... czyli retro and folk band. Naszą specjalnością są stare, niezapomniane przeboje w akustycznych aranżacjach. Inspirują nas szlagiery dwudziestolecia międzywojennego, miejski folk z różnych stron świata oraz... poetyckie ballady."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Layout lightTheme>
          <Image
            src="/about.jpg"
            alt="członkowie zespołu Bimber Boys"
            layout="intrinsic"
            width={1000}
            height={308}
          />
          <h1 className={styles.title_about}>bimber boys</h1>
          <p className={styles.main_text}>
            ... czyli retro &#38; folk band. Naszą specjalnością są stare,
            niezapomniane przeboje w akustycznych aranżacjach. Inspirują nas
            szlagiery dwudziestolecia międzywojennego, miejski folk z różnych
            stron świata oraz... poetyckie ballady.
          </p>
          <div className={styles.band_members_container}>
            <div className={styles.col}>
              <p className={styles.name}>KRZYSZTOF BUDA</p>
              <p className={styles.caption}>śpiew i skrzypce</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>BOGDAN DEPTA</p>
              <p className={styles.caption}>śpiew i akordeon</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>JAROSŁAW TULIKOWSKI</p>
              <p className={styles.caption}>śpiew i gitara basowa</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>BarteK KAZIMERCZAK</p>
              <p className={styles.caption}>śpiew i gitara akustyczna</p>
            </div>
            <div className={styles.col}>
              <p className={styles.name}>Cory Younts</p>
              <p className={styles.caption}>perkusja</p>
            </div>
          </div>
          <CTA lightTheme />
        </Layout>
      </div>
    </>
  );
};

export default About;
