import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import * as styles from "../styles/index.module.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulHomepage(slug: { eq: "hello-im" }) {
        title
        name
        work
        heroImage {
          gatsbyImageData(width: 800, placeholder: BLURRED)
        }
      }
    }
  `);

  const home = data.contentfulHomepage;
  const image = getImage(home.heroImage);

  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.left}>
          {image && (
            <div className={styles.avatarWrap}>
              <GatsbyImage
                image={image}
                alt={home.name}
                className={styles.avatar}
              />
            </div>
          )}
        </div>

        <div className={styles.right}>
          <p className={styles.kicker}>{home.title}</p>
          <h1 className={styles.name}>{home.name}</h1>
          <p className={styles.role}>{home.work}</p>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default IndexPage;
