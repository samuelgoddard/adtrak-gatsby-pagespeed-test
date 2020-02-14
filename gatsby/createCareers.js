const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCareer {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsCareer.edges.map(edge => {
        createPage({
          path: `careers/${edge.node.slug}`,
          component: path.resolve(`./src/templates/career.js`),
          context: { slug: edge.node.slug },
        })
      })      
      resolve()
    })
  })
}