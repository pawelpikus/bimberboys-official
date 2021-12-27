import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Listen.module.scss";
import audioPlayerStyles from "../styles/AudioPlayer.module.scss";
import { Layout, CTA } from "../components";
import logo_sm from "../public/bimberboys-logo-sm.png";
import YouTube from "react-youtube";
import React from "react";
import Player from "../components/Player/Player";

const Listen: NextPage = () => {
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

      <div className={styles.container}>
        <Layout>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus convallis nisi et malesuada. Integer lobortis quam quis
                  ante ultrices, vitae dignissim enim ultricies. Nam sit amet
                  efficitur nulla. Nulla nulla neque, maximus a neque nec,
                  convallis euismod dui. Cras eu velit a neque pretium cursus.
                  Etiam feugiat lectus sed nulla pretium ultricies. Nulla
                  aliquam neque placerat augue dapibus blandit. Proin efficitur
                  gravida orci id feugiat.{" "}
                </p>
              </article>
              <div className={audioPlayerStyles.player_container}>
                <Player />
              </div>
            </section>
            <section className={styles.col}>
              <div className={styles.video_wrapper}>
                <YouTube videoId="Y5xyvx4hAKg" className={styles.video} />
              </div>
              <div className={styles.video_wrapper}>
                <YouTube videoId="T18j-gFLiCw" className={styles.video} />
              </div>
              <div className={styles.video_wrapper}>
                <YouTube videoId="d6X35Y30p2A" className={styles.video} />
              </div>
            </section>
          </div>
          <CTA />
        </Layout>
      </div>
    </>
  );
};

export default Listen;
