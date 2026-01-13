import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import * as styles from "../styles/projectTemplate.module.css";

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject;
  const image = getImage(project.image);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
        </header>

        {image && (
          <div className={styles.imageWrap}>
            <GatsbyImage
              image={image}
              alt={project.title}
              className={styles.image}
            />
          </div>
        )}

        <section className={styles.content}>
          <p className={styles.longText}>
            {project.longdescription?.longdescription}
          </p>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      longdescription {
        longdescription
      }
      image {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export const Head = ({ data }) => {
  const project = data.contentfulProject;

  return (
    <>
      <title>{project.title}</title>
      <meta
        name="description"
        content={project.longdescription?.longdescription.slice(0, 160)}
      />
    </>
  );
};

export default ProjectTemplate;
