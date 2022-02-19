import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ListenContact.module.scss";
import { Layout } from "../components";
import logo_sm from "../public/bimberboys-logo-sm.png";
import YouTube from "react-youtube";
import React from "react";
import Player from "../components/Player/Player";

const Listen = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - Posłuchaj naszych piosenek</title>
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
        <div className={styles.content}>
          <div className={styles.listen_container}>
            <section className={styles.col}>
              <div className={styles.logo_wrapper}>
                <Image
                  src={logo_sm}
                  alt="logo Bimber Boys"
                  placeholder="blur"
                />
              </div>
              <article className={styles.main_text}>
                <h1 className={`${styles.title} ${styles.title_light}`}>
                  Posłuchaj naszych piosenek
                </h1>
                <p>
                  Tutaj możecie nas posłuchać. I zobaczyć :) Te utwory to w
                  większości piosenki zarejestrowane dość spontanicznie podczas
                  występów „na żywo”. Nawet balladę „Chłopcy źli” (to oczywiście
                  cover Aloszy Awdiejewa) zarejestrowaliśmy na tak zwaną
                  „setkę”. Za to teledysk to już poważna praca wielu naszych
                  przyjaciółek i przyjaciół.
                </p>
                <p>
                  Cały czas tworzymy własne piosenki z myślą o autorskiej
                  płycie. Pierwsze z tych utworów pojawią się tu już niebawem :)
                </p>
              </article>
              <Player />
            </section>
            <section className={styles.col}>
              <div className={styles.video_wrapper}>
                <YouTube videoId="Y5xyvx4hAKg" className={styles.video} />
              </div>

              <div className={styles.video_wrapper}>
                <YouTube videoId="t0mzXsh45Q4" className={styles.video} />
              </div>
              <div className={styles.video_wrapper}>
                <YouTube videoId="d6X35Y30p2A" className={styles.video} />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Listen;
