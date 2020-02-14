const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsGenericPage {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsGenericPage.edges.map(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/generic.js`),
          context: { slug: edge.node.slug },
        })
      })      
      resolve()
    })
  })
}