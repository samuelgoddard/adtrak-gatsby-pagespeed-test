import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogTeaser from "../components/blogTeaser/blogTeaser"

const Category = ({ data: { category, articles }, location }) => {
  return (
    <>
      <SEO
        titleOverride={category.metaTags && category.metaTags.title ? category.metaTags.title : category.title}
        descriptionOverride={category.metaTags && category.metaTags.description ? category.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={category.metaTags && category.metaTags.image ? category.metaTags.image.url : null}
      />

      <section className="mb-16 lg:mb-24 mt-0 md:mt-6">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <h1>Category: { category.name }</h1>
              { category.description && (
                <div className="text-xl md:text-2xl" dangerouslySetInnerHTML={{ __html: category.description }}></div>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className="mb-6 overflow-hidden">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="flex flex-wrap md:-mx-1">
              {articles.edges.map(({ node }, index) => {
                return (
                  <BlogTeaser
                    key={index}
                    slug={node.slug}
                    date={node.date}
                    title={node.title}
                    author={node.author.name}
                    category={node.categories ? node.categories[0].name : null }
                  ></BlogTeaser>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category

export const query = graphql`
  query CategoryQuery($slug: String!) {
    category: datoCmsCategory(slug: { eq: $slug }) {
      name
      description
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
    articles: allDatoCmsArticle(
      sort: {fields: date, order: DESC}
      filter: {categories: {elemMatch: {slug: {eq: $slug}}}}
    ) {
      edges {
        node {
          id
          title
          slug
          date
          author {
            name
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`