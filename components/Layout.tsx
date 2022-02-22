import { Props } from "../types/props";
import { Navbar, Footer, CTA } from "../components";
import styles from "../styles/Home.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Layout = ({ children }: Props) => {
  const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <div className={styles.page_container}>
      <div>
        <div className={styles.header_container}>
          <div className={styles.content}>
            <Navbar />
          </div>
        </div>

        {children}

        <section className={styles.content}>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <CTA
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </section>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.content}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
