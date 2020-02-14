import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import UspBand from "../components/uspBand/uspBand"

const WhoWeArePage = ({ data: { page }, location }) => {
  return (
    <>
      <SEO
        titleOverride={"Who We Are"}
        descriptionOverride={"We’re a results-driven design, marketing and brand agency providing digital transformation for our clients."}
        pathnameOverride={location.pathname}
      />

      <section className="mb-6 lg:mb-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 content md:mb-0 md:pl-12 xl:pl-24 mb-6 md:mb-0">
              <div>
                <h1>{page.title}</h1>
                <div className="content content--reset" dangerouslySetInnerHTML={{ __html: page.introduction }}></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:ml-auto">
              <div className="max-w-xs lg:max-w-md mx-auto mb-12 md:mb-0">
                <Img fluid={page.introductionSupportingImage.fluid} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <UspBand
        usps={page.usps}
      />
      
      <section className="mb-16 md:mb-24 lg:mb-32 xl:mb-48 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 lg:w-1/3 md:mr-auto order-2 md:order-1 md:pl-16">
              <div className="max-w-xs lg:max-w-md ml-auto mr-auto md:ml-0">
                <Img fluid={page.contentSupportingImage.fluid} />
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 md:mb-0 mb-6 md:mb-0 order-1 md:order-2 md:pr-12 lg:pr-24">
              <div className="content" dangerouslySetInnerHTML={{ __html: page.content }}></div>
              <h4>Want to join the team?</h4>
              
              <Link className="btn btn--outline text-secondary-dark inline-block text-base" to="/careers">View Our Jobs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 lg:mb-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap md:-mx-5 items-center">
            {page.teamImages.map(({ fluid }, index) => {
              return(
                <div key={index} className="w-full md:w-1/3 md:px-5 mb-8">
                  <Img
                    className="w-full h-auto"
                    backgroundColor={`#3B5CC4`}
                    fluid={fluid}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeArePage

export const query = graphql`
  query whoWeArePage {
    page: datoCmsWhoWeAre {
      title
      introduction
      introductionSupportingImage {
        fluid(imgixParams: {h: "692", w: "500"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      content
      contentSupportingImage {
        fluid(imgixParams: {h: "684", w: "500"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      usps {
        heading
        blurb
      }
      teamImages {
        fluid(
          maxWidth: 900
          imgixParams: {h: "900", w: "900", fit: "crop", crop: "center"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      slug
    }
  }
`