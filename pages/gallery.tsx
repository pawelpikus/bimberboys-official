import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Gallery.module.scss";
import { Layout, CTA } from "../components";
import Image from "next/image";
import gallery_img1 from "../public/img_gallery/1.jpg";
import gallery_img2 from "../public/img_gallery/2.jpg";
import gallery_img3 from "../public/img_gallery/3.jpg";
import gallery_img4 from "../public/img_gallery/4.jpg";
import gallery_img5 from "../public/img_gallery/5.jpg";
import gallery_img6 from "../public/img_gallery/6.jpg";
import gallery_img7 from "../public/img_gallery/7.jpg";
import gallery_img8 from "../public/img_gallery/8.jpg";

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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest"/>
      </Head>
      <div className={styles.container}>
        <Layout lightTheme>
          <h1 className={styles.title}>Galeria zdjęć</h1>
          <div className={styles.gallery_container}>
            {/* photo 1 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img1}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 2 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img2}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 3 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img3}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 4 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img4}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 5 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img5}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 6*/}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img6}
                alt="członkowie zespołu Bimber Boys"
                layout="responsive"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 7 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img7}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
            {/* photo 8 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img8}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Image title</h3>
                <p className={styles.desc_text}>
                  Short description..., sit amet consectetur adipisicing elit.
                  Odio culpa dicta distinctio quos eveniet qui tenetur ad
                  impedit officia, expedita sed est necessitatibus, eligendi
                  quam perspiciatis maiores in saepe beatae.
                </p>
              </div>
            </div>
          </div>
          <CTA lightTheme />
        </Layout>
      </div>
    </>
  );
};

export default Gallery;
