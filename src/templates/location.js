import React from "react"
import SEO from "../components/seo"
import UspBand from "../components/uspBand/uspBand"
import FeaturedCaseStudy from "../components/featuredCaseStudy/featuredCaseStudy"
import FormCta from "../components/formCta/formCta"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Career = ({ data: { page }, location }) => {
  return (
    <>
      <SEO
        titleOverride={page.metaTags && page.metaTags.title ? page.metaTags.title : page.title}
        descriptionOverride={page.metaTags && page.metaTags.description ? page.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={page.metaTags && page.metaTags.image ? page.metaTags.image.url : null}
      />

      <section className="mb-8">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="w-full md:w-9/12 lg:w-7/12 mx-auto text-center">
              <h1>{ page.heroHeading }</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 lg:mb-24">
        <p className="text-xl lg:text-2xl text-center font-display mb-8 px-12 md:px-24 leading-tight align-middle">Get in touch today on <a href="tel:01159598900" className="text-primary hover:text-primary-dark focus:text-primary-dark transition inline-block break-all contactlink">0115 959 8900</a> or <span className="ml-2 align-middle block mt-3 sm:mt-0 sm:inline-block"><Link to="/contact/" className="btn btn--outline text-base capitalize">Get in touch</Link></span></p>
      </section>

      <UspBand
        usps={[
          { 
            heading: "Dedicated Client Teams",
            blurb: "Your dedicated team is made up of specialists from all digital disciplines, ensuring a collaborative, cross-platform strategy."
          },{
            heading: "Nationwide Account Team",
            blurb: "We have Account Managers located across the country. They will visit you to learn about your business and help you achieve your goals online."
          }, {
            heading: "A Multi-Discipline Agency",
            blurb: "From web design and PPC to branding, photography and video, we’re a true full-service digital agency and have experts across all fields."
          }]}
      />

      <section className="mb-16 lg:mb-32 xl:mb-40 overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:-mx-12 xl:items-center">
            <div className="w-full lg:w-1/2 xl:w-5/12 lg:px-12 mb-5 lg:mb-0">
              <div className="w-full content lg:pr-12 xl:pr-0" dangerouslySetInnerHTML={{ __html: page.content }}></div>
            </div>

            {page.contentImage && (
              <div className="w-full lg:w-1/2 lg:px-12 ml-auto">
                <Img
                  backgroundColor={`#3B5CC4`}
                  fluid={page.contentImage.fluid}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      { page.featuredCaseStudy && (
        <FeaturedCaseStudy
          slug={page.featuredCaseStudy.slug}
          blurb={page.featuredCaseStudy.teaserBlurb}
          image={page.featuredCaseStudy.teaserIpadImage}
        />
      )}

      <FormCta />
    </>
  )
}

export default Career

export const query = graphql`
  query locationPageQuery($slug: String!) {
    page: datoCmsLocation(slug: { eq: $slug }) {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      title
      heroHeading
      content
      contentImage {
        fluid(
          maxWidth: 720
          imgixParams: {h: "720", w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      featuredCaseStudy {
        title
        teaserBlurb
        teaserIpadImage {
          fluid(
            maxWidth: 900
            imgixParams: {h: "500", w: "900", fit: "crop", crop: "center"}) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
        slug
      }
    }
  }
`