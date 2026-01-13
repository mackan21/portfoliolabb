const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allContentfulProject.nodes;

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve("./src/templates/projectTemplate.js"),
      context: {
        slug: project.slug,
      },
    });
  });
};
