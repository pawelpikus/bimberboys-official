import Head from "next/head";
import styles from "../styles/About.module.scss";
import { Layout } from "../components";
import Image from "next/image";
import aboutPic from "../public/about.jpg";
import HeadContent from "../components/HeadContent";

const About = () => {
  return (
    <>
      <Head>
        <HeadContent title="Bimber Boys - O Nas" />
      </Head>
      <Layout>
        <div className={styles.content}>
          <article className={styles.article_container}>
            <div className={styles.img_wrapper}>
              <Image
                src={aboutPic}
                alt="członkowie zespołu Bimber Boys"
                layout="intrinsic"
                placeholder="blur"
              />
            </div>
            <h1 className={styles.title}>bimber boys</h1>
            <p className={styles.main_text}>
              ... czyli retro &#38; folk band. Naszą specjalnością są stare,
              niezapomniane przeboje w akustycznych aranżacjach. Inspirują nas
              szlagiery dwudziestolecia międzywojennego, miejski folk z różnych
              stron świata oraz... poetyckie ballady.
            </p>
            <p>
              Podczas występów, oprócz naszych własnych kompozycji, usłyszycie
              między innymi piosenki z repertuaru: St. Grzesiuka, A. Awdiejewa,
              B. Okudżawy, M. Fogga, W. Wysockiego i... K. Krawczyka.
            </p>
            <p>
              Zgodnie z nazwą wypracowaliśmy początkowo nieco chropawy, rubaszny
              styl ale z czasem do naszej muzyki wkradły się niespodziewanie
              sentymentalne nuty i nieco poważniejsze treści. Dziś z taką samą
              radością gramy szalone potańcówkowe programy w stylu retro, jak i
              delikatne koncerty złożone z poetyckich ballad.
            </p>
            <p>
              A poza tym - jesteśmy pierwszym w świecie boys bandem, który nie
              tańczy, za to gra na akustycznych instrumentach…
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
                <p className={styles.name}>Bartek KAZIMIERCZAK</p>
                <p className={styles.caption}>śpiew i gitara akustyczna</p>
              </div>
              <div className={styles.col}>
                <p className={styles.name}>Marek Pukas</p>
                <p className={styles.caption}>perkusja</p>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default About;
