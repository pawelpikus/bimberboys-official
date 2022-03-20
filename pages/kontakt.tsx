import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ListenContact.module.scss";
import logo_sm from "../public/bimberboys-logo-sm.png";
import contact_img from "../public/contact_img.jpg";
import React from "react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - Kontakt</title>
      </Head>

      <div className={styles.content}>
        <div className={styles.listen_container}>
          <section className={`${styles.col} ${styles.flex_between}`}>
            <div>
              <div className={styles.logo_wrapper}>
                <Image
                  src={logo_sm}
                  alt="logo Bimber Boys"
                  placeholder="blur"
                />
              </div>
              <article className={styles.main_text}>
                <h1 className={`${styles.title} ${styles.title_light}`}>
                  Management i&nbsp;zamówienia
                </h1>
                <p>
                  Email: bimberboys@gmail.com
                  <br />
                  Telefon: 503 340 408, 506 509 900
                </p>
              </article>
            </div>
            <ContactForm />
          </section>
          <section className={styles.col}>
            <div className={styles.img_wrapper}>
              <Image
                src={contact_img}
                alt="kontakt zespołu Bimber Boys"
                placeholder="blur"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
