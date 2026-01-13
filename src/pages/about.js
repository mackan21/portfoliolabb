import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      contentfulAboutpage(slug: { eq: "about" }) {
        title
        description {
          description
        }
        image {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
  `);

  const about = data.contentfulAboutpage;
  const image = getImage(about.image);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{about.title}</h1>

        {image && (
          <div className={styles.imageWrap}>
            <GatsbyImage
              image={image}
              alt={about.title}
              className={styles.image}
            />
          </div>
        )}

        <p className={styles.text}>{about.description?.description}</p>
      </div>
    </Layout>
  );
};

export const Head = () => <title>About</title>;

export default AboutPage;
