import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Layout, CTA } from "../components";
import Image from "next/image";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Layout>
          <Image
            src="/bimber-logo2.png"
            alt="Bimber Boys logo"
            layout="intrinsic"
            width={600}
            height={400}
          />
          <CTA />
        </Layout>
    </div>
    </>
  );
};

export default Home;
