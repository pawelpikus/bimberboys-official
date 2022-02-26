import Head from "next/head";
import styles from "../styles/Gallery.module.scss";
import { Layout } from "../components";
import Image from "next/image";
import gallery_img1 from "../public/img_gallery/1.jpg";
import gallery_img2 from "../public/img_gallery/2.jpg";
import gallery_img3 from "../public/img_gallery/3.jpg";
import gallery_img4 from "../public/img_gallery/4.jpg";
import gallery_img5 from "../public/img_gallery/5.jpg";
import gallery_img6 from "../public/img_gallery/6.jpg";
import gallery_img7 from "../public/img_gallery/7.jpg";
import gallery_img8 from "../public/img_gallery/8.jpg";
import gallery_img9 from "../public/img_gallery/9.jpg";
import gallery_img10 from "../public/img_gallery/10.jpg";
import HeadContent from "../components/HeadContent";

const Gallery = () => {
  return (
    <>
      <Head>
        <HeadContent title="Bimber Boys - Galeria Zdjęć" />
      </Head>

      <Layout>
        <div className={styles.content}>
          <h1 className={styles.title}>Galeria zdjęć</h1>
          <div className={styles.gallery_container}>
            {/* photo 1 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img1}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
                priority
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Jeden za wszytkich...</h3>
                <p className={styles.desc_text}>
                  Bimber Boys czyli pięciu muzycznych muszkieterów! Naprawdę
                  lubimy razem grać i zabierać publiczność na szalone koncertowe
                  podróże.
                </p>
              </div>
            </div>
            {/* photo 2 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img2}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
                priority
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Przy stoliku</h3>
                <p className={styles.desc_text}>
                  Zaczynaliśmy jako kwartet ale jedno wolne krzesło (to z
                  butami) od początku czekało na Marka i jego perkusję. Przy tym
                  stoliku narodziła się niesamowita grupa Bimber Boys! Zdjęcie
                  (koloryzowane) ze spotkania założycielskiego.
                </p>
              </div>
            </div>
            {/* photo 3 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img3}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
                priority
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Ulubione miejsca</h3>
                <p className={styles.desc_text}>
                  Niewielkie knajpki to nasze ulubione miejsca muzycznych
                  spotkań. Oczywiście wielkie sceny też mają swój klimat ale w
                  ciasnym pubie publiczność jest po prostu bliżej. Bliżej mamy
                  tez do baru :)
                </p>
              </div>
            </div>
            {/* photo 4 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img4}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
                priority
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Dopada nas twist!</h3>
                <p className={styles.desc_text}>
                  Kiedy dopada nas twist zamieniamy się instrumentami i dajemy
                  się porwać szalonym, muzycznym prądom. Wtedy rodzą się nowe
                  piosenki, pomysły i aranżacje. Destylujemy radośnie nasz
                  muzyczny bimberek!
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
                <h3 className={styles.desc_title}>Jarek</h3>
                <p className={styles.desc_text}>
                  Jarek szyje na basie. Potrafi też śpiewać. Nie tylko basem.
                  Oprócz gitar basowych kocha Bieszczady. I rowery.
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
              <div
                style={{ marginBottom: "0px" }}
                className={styles.description}
              >
                <h3 className={styles.desc_title}>Bogdan zwany Bodkiem</h3>
                <p className={styles.desc_text}>
                  Bogdan zwany Bodkiem, oprócz śpiewania, grania na akordeonie,
                  klawiszach i puzonie, spędza czas spotykając piękne fanki i
                  kolegów z wojska. A kolegów ma wszędzie (fanki też).
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
                <h3 className={styles.desc_title}>Kris</h3>
                <p className={styles.desc_text}>
                  Kiedy Kris zaryczy swym potężnym głosem brzmi jak Wołodia
                  Wysocki. Ale jeśli zechce, potrafi też być liryczny jak jego
                  skrzypce. W wolnych chwilach gra na organach.
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
                <h3 className={styles.desc_title}>Marek</h3>
                <p className={styles.desc_text}>
                  Marek jest jak Ringo Starr albo Phil Collins, to znaczy, że
                  grając na bębnach potrafi równocześnie śpiewać! Potrafi też
                  wyczarowywać niesamowite dźwięki z gitary, a nawet z
                  mandoliny.
                </p>
              </div>
            </div>
            {/* photo 9 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img9}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>Bart</h3>
                <p className={styles.desc_text}>
                  Bart to poszukiwacz piosenek. Biega po świecie (realnym i
                  wirtualnym) i uparcie poluje na nowe utwory dla Bimber Boysów.
                  Kiedy nie może nic znaleźć, siada i sam coś pisze. Tutaj zerka
                  w górę sprawdzając czy przypadkiem nie spada na niego jakiś
                  przebój.
                </p>
              </div>
            </div>
            {/* photo 10 */}
            <div className={styles.img_wrapper}>
              <Image
                src={gallery_img10}
                alt="członkowie zespołu Bimber Boys"
                placeholder="blur"
              />
              <div className={styles.description}>
                <h3 className={styles.desc_title}>
                  Do zobaczenia na koncertach!
                </h3>
                <p className={styles.desc_text}>
                  Ukłony dla naszej publiczności, jesteście najlepsi! Kłaniamy
                  się pięknie (tak jak kiedyś robili to Beatelsi)! Do zobaczenia
                  na koncertach!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Gallery;
