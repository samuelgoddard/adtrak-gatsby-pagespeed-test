import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import CaseStudyTeaserImage from "../components/caseStudyTeaserImage/caseStudyTeaserImage"

const WorkPage = ({ data: { caseStudies, creativeCaseStudies }, location}) => {
  return (
    <>
      <SEO
        titleOverride={"Our Work & Case Studies"}
        descriptionOverride={"View our digital marketing and creative services work at Adtrak. Over the years we have created many digital marketing strategies."}
        pathnameOverride={location.pathname}
      />

      <section className="mb-16 lg:mb-24 mt-0 md:mt-6">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <h1>Our Work</h1>
              <div className="content content--reset">
                <p>We’re experts in design, marketing and brand and use our skills collaboratively to generate fantastic results. Find out how we’ve helped our clients succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12 lg:mb-24 overflow-hidden py-4">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="flex flex-wrap md:-mx-1">
              {caseStudies.edges.map(({ node }, index) => {
                return(
                  <div className="w-full md:w-1/2 xl:w-1/3 md:px-1 pb-2" key={index}>
                    <CaseStudyTeaserImage
                      url={`/work/${node.slug}`}
                      image={node.teaserImage.fluid}
                      title={node.title}
                  />
                  </div>
                )
              })}
              {creativeCaseStudies.edges.map(({ node }, index) => {
                return(
                  <div className="w-full md:w-1/2 xl:w-1/3 md:px-1 pb-2" key={index}>
                    <CaseStudyTeaserImage
                      url={`/work/${node.slug}`}
                      image={node.teaserImage.fluid}
                      title={node.title}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkPage

export const query = graphql`
  query WorkPageQuery {
    caseStudies: allDatoCmsCaseStudy(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          teaserImage {
            fluid(
              maxWidth: 640
              maxHeight: 640
              imgixParams: {h: "640", w: "640", fit: "crop", crop: "faces, edges"}) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
    creativeCaseStudies: allDatoCmsCreativeCaseStudy(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          teaserImage {
            fluid(
              maxWidth: 640
              maxHeight: 640
              imgixParams: {h: "640", w: "640", fit: "crop", crop: "faces, edges"}) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`