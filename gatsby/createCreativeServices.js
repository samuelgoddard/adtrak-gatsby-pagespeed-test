const slugify = require(`slugify`)
const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCreativeService(filter: { root: { eq: true } }) {
          edges {
            node {
              slug
              model {
                apiKey
              }
              treeChildren {
                slug
                treeParent {
                  slug
                }
              }
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsCreativeService.edges.map(edge => {
        let slugged = slugify(edge.node.model.apiKey + 's',{
          lower: true,
        }).replace(/[_]/g, '-');

        createPage({
          path: `${slugged}/${edge.node.slug}`,
          component: path.resolve(`./src/templates/creativeService.js`),
          context: { slug: edge.node.slug },
        })
    
        edge.node.treeChildren.map(edge => {
          createPage({
            path: `${slugged}/${edge.treeParent.slug}/${edge.slug}`,
            component: path.resolve(`./src/templates/creativeService.js`),
            context: { slug: edge.slug },
          })
        })
      })
      resolve()
    })
  })
}