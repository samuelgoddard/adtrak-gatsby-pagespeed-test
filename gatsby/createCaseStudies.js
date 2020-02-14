const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCaseStudy {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
        allDatoCmsCreativeCaseStudy {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsCaseStudy.edges.map(edge => {
        createPage({
          path: `work/${edge.node.slug}`,
          component: path.resolve(`./src/templates/caseStudy.js`),
          context: { slug: edge.node.slug },
        })
      })
      result.data.allDatoCmsCreativeCaseStudy.edges.map(edge => {
        createPage({
          path: `work/${edge.node.slug}`,
          component: path.resolve(`./src/templates/creativeCaseStudy.js`),
          context: { slug: edge.node.slug },
        })
      })      
      resolve()
    })
  })
}