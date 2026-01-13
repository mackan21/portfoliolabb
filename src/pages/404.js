import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import * as styles from "../styles/notFound.module.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.code}>404</div>

        <p className={styles.text}>Oops… this page wandered off.</p>

        <p className={styles.subtext}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className={styles.link}>
          Take me home
        </Link>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>404 – Page not found</title>
    <meta
      name="description"
      content="The page you are looking for could not be found."
    />
  </>
);

export default NotFoundPage;
