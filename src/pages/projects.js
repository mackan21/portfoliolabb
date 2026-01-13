import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import * as styles from "../styles/projects.module.css";

const ProjectsPage = ({ data }) => {
  const projects = data.allContentfulProject.nodes;

  return (
    <Layout>
      <div className={styles.list}>
        {projects.map((project, index) => {
          const image = getImage(project.image);
          const isReversed = index % 2 === 1;

          return (
            <article
              key={project.slug}
              className={`${styles.item} ${isReversed ? styles.reversed : ""}`}
            >
              <div className={styles.text}>
                <h2 className={styles.title}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className={styles.titleLink}
                  >
                    {project.title}
                  </Link>
                </h2>

                <p className={styles.description}>
                  {project.description?.description}
                </p>
              </div>

              <div className={styles.media}>
                {image && (
                  <Link
                    to={`/projects/${project.slug}`}
                    className={styles.imageLink}
                  >
                    <GatsbyImage
                      image={image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(sort: { order: ASC }) {
      nodes {
        title
        slug
        order
        description {
          description
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
  }
`;

export const Head = () => (
  <>
    <title>Projects</title>
    <meta
      name="description"
      content="A selection of projects including web development, frontend solutions and CMS-driven websites."
    />
  </>
);

export default ProjectsPage;
