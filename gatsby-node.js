const createDigitalServices = require(`./gatsby/createDigitalServices`)
const createCreativeServices = require(`./gatsby/createCreativeServices`)
const createBlogPosts = require(`./gatsby/createBlogPosts`)
const createCategories = require(`./gatsby/createCategories`)
const createCaseStudies = require(`./gatsby/createCaseStudies`)
const createCareers = require(`./gatsby/createCareers`)
const createGenericPages = require(`./gatsby/createGenericPages`)
const createLocations = require(`./gatsby/createLocations`)

exports.createPages = async ({ actions, graphql }) => {
  await createDigitalServices({ actions, graphql })
  await createCreativeServices({ actions, graphql })
  await createBlogPosts({ actions, graphql })
  await createCategories({ actions, graphql })
  await createCaseStudies({ actions, graphql })
  await createCareers({ actions, graphql })
  await createGenericPages({ actions, graphql })
  await createLocations({ actions, graphql })
}