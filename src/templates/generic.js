import React from "react"
import SEO from "../components/seo"
import Shape from "../components/shape/shape"
import { graphql } from "gatsby"

const Career = ({ data: { page }, location }) => {
  return (
    <>
      <SEO
        titleOverride={page.metaTags && page.metaTags.title ? page.metaTags.title : page.title}
        descriptionOverride={page.metaTags && page.metaTags.description}
        pathnameOverride={location.pathname}
        imageOverride={page.metaTags && page.metaTags.image ? page.metaTags.image.url : null}
      />

      <section className="mb-16 lg:mb-32">
        <div className="container">
          <div className="w-full md:w-2/3 text-center mx-auto mb-8 md:mb-0">
            <h1>{ page.title }</h1>
          </div>
        </div>
        <div className="w-full mb-16 md:mb-24 hidden md:block">
          <div className="container container--retina relative">
            <div className="w-1/2 md:w-1/4 lg:w-3/12 absolute top-0 left-0">
              <Shape 
                static={true}
                index={7}
              />
            </div>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="w-full md:w-8/12 xl:w-1/2 mx-auto">
            <div className="content" dangerouslySetInnerHTML={{ __html: page.content }}></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Career

export const query = graphql`
  query genericPageQuery($slug: String!) {
    page: datoCmsGenericPage(slug: { eq: $slug }) {
      title
      content
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
  }
`