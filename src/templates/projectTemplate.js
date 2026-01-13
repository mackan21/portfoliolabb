import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject;
  const image = getImage(project.image);

  return (
    <Layout>
      <p>
        <Link to="/projects">← Back to projects</Link>
      </p>

      <h1>{project.title}</h1>

      {image && <GatsbyImage image={image} alt={project.title} />}

      <p>{project.longdescription?.longdescription}</p>
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
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.contentfulProject.title}</title>;

export default ProjectTemplate;
