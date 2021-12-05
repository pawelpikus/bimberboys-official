import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Gallery.module.scss";
import { Layout, CTA } from "../components";
import Image from "next/image";
import gallery_img1 from "../public/img_gallery/1.jpg";
import gallery_img2 from "../public/img_gallery/2.jpg";
import gallery_img3 from "../public/img_gallery/3.jpg";

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - Galeria Zdjęć</title>
        <meta
          name="description"
          content="Oficjalna strona zespołu Bimber Boys... czyli retro and folk band. Naszą specjalnością są stare, niezapomniane przeboje w akustycznych aranżacjach. Inspirują nas szlagiery dwudziestolecia międzywojennego, miejski folk z różnych stron świata oraz... poetyckie ballady."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Layout lightTheme>
          <div className={styles.gallery_container}>
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img1}
                alt="członkowie zespołu Bimber Boys"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img2}
                alt="członkowie zespołu Bimber Boys"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img3}
                alt="członkowie zespołu Bimber Boys"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
          </div>
          <CTA lightTheme />
        </Layout>
      </div>
    </>
  );
};

export default Gallery;
