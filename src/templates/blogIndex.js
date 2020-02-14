import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BlogTeaser from "../components/blogTeaser/blogTeaser"
import Pager from "../components/pager/pager"

const BlogIndexPage = ({ data: { articles }, location, pageContext }) => {
  const { currentPage, articlesNum } = pageContext
  const articlesArray = Array.from(Array(articlesNum + 1).keys())

  return (
    <>
      <SEO
        titleOverride={currentPage > 1 ? `Adtrak News & Views Page ${currentPage}` : `Adtrak News & Views`}
        descriptionOverride={"Our latest news, updates and opinion pieces on digital marketing, web design and more."}
        pathnameOverride={location.pathname}
      />

      <section className="mb-16 lg:mb-24 mt-0 md:mt-6">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <h1>Blog</h1>
              <div className="content content--reset">
                <p>Our latest news, updates and opinion pieces.</p>
              </div>
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

      <section className="mb-12 md:mb-32">
        <Pager
          prefix={`blog`}
          current={currentPage}
          limit={articlesArray}
        ></Pager>
      </section>
    </>
  )
}

export default BlogIndexPage

export const query = graphql`
  query BlogIndexPageQuery($limit: Int!, $skip: Int!) {
    articles: allDatoCmsArticle(
      sort: {
        fields: date,
        order: DESC
      },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          categories {
            slug
            name
          }
          date
          author {
            name
            slug
          }
        }
      }
    }
  }
`
