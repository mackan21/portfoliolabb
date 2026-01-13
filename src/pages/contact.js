import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import * as styles from "../styles/contact.module.css";

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      contentfulContactpage(slug: { eq: "contact" }) {
        title
        introText {
          introText
        }
        email
        gitHub
        linkedIn
      }
    }
  `);

  const contact = data.contentfulContactpage;

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{contact.title}</h1>

        {/* Intro text från Contentful */}
        <p className={styles.intro}>{contact.introText?.introText}</p>

        <div className={styles.list}>
          {contact.email && (
            <div className={styles.item}>
              <span className={styles.label}>Email</span>
              <a className={styles.link} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          )}

          {contact.linkedIn && (
            <div className={styles.item}>
              <span className={styles.label}>LinkedIn</span>
              <a
                className={styles.link}
                href={contact.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {contact.linkedIn}
              </a>
            </div>
          )}

          {contact.gitHub && (
            <div className={styles.item}>
              <span className={styles.label}>GitHub</span>
              <a
                className={styles.link}
                href={contact.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                {contact.gitHub}
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Contact</title>
    <meta
      name="description"
      content="Get in touch with me via email, LinkedIn or GitHub. Open for collaborations and opportunities."
    />
  </>
);

export default ContactPage;
