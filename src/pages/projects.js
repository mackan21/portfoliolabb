import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const ProjectsPage = ({ data }) => {
  const projects = data.allContentfulProject.nodes;

  return (
    <Layout>
      <h1>Projects</h1>

      {projects.map((project) => {
        const image = getImage(project.image);

        return (
          <article key={project.slug}>
            <h2>{project.title}</h2>

            {image && <GatsbyImage image={image} alt={project.title} />}

            <p>{project.description?.description}</p>

            <p>
              <Link to={`/projects/${project.slug}`}>Open project</Link>
            </p>

            <hr />
          </article>
        );
      })}
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
          gatsbyImageData(width: 900, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <title>Projects</title>;

export default ProjectsPage;
