const path = require(`path`)
const _ = require(`lodash`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsArticle(
          sort: {
            fields: date,
            order: DESC
          }
        ) {
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
      const articlesPerPage = 12;
      const articleData = result.data.allDatoCmsArticle.edges;
      const articleTemplate = path.resolve(`./src/templates/blogPost.js`);
      const articleIndexTemplate = path.resolve(`./src/templates/blogIndex.js`);
      const articlesNum = Math.ceil(articleData.length / articlesPerPage);

      articleData.map((edge, index) => {
        const prev = index < articleData.length - 1 ? articleData[index + 1] : null;

        createPage({
          path: `blog/${edge.node.slug}`,
          component: articleTemplate,
          context: { 
            slug: edge.node.slug,
            prev
          },
        })
      })
      Array.from({ length: articlesNum }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
          component: articleIndexTemplate,
          context: {
            limit: articlesPerPage,
            skip: i * articlesPerPage,
            articlesNum,
            currentPage: i + 1
          }
        })
      })
      resolve()
    })
  })
}