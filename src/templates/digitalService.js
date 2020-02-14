import React from "react"
import SEO from "../components/seo"
import UspBand from "../components/uspBand/uspBand"
import FormCta from "../components/formCta/formCta"
import FeaturedCaseStudy from "../components/featuredCaseStudy/featuredCaseStudy"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const DigitalServicePage = ({ data: { service }, location }) => {
  return (
    <>
      <SEO
        titleOverride={service.metaTags && service.metaTags.title ? service.metaTags.title : service.title}
        descriptionOverride={service.metaTags && service.metaTags.description ? service.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={service.metaTags && service.metaTags.image ? service.metaTags.image.url : null}
      />

      <section className="mb-12">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="w-full md:w-9/12 lg:w-7/12 mx-auto text-center">
            <ol className="block mb-1">
                <li className="text-grey-dark text-base">
                  <Link to="/services/" className="text-grey-dark text-base underline hover:text-secondary-dark focus:text-secondary-dark transition">
                    <span>Digital</span>
                  </Link> /
                </li>
              </ol>
              
              <span className="h1 block">{ service.heroHeading }</span>
              <div className="content content--reset" dangerouslySetInnerHTML={{ __html: service.heroExcerpt }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 lg:mb-24">
        <p className="text-xl lg:text-2xl text-center font-display mb-8 px-12 md:px-24 leading-tight align-middle">Get in touch today on <a href="tel:01159598900" className="text-primary hover:text-primary-dark focus:text-primary-dark transition inline-block break-all contactlink">0115 959 8900</a> or <span className="ml-2 align-middle block mt-3 sm:mt-0 sm:inline-block"><a href="#form" className="btn btn--outline text-base capitalize">Get in touch</a></span></p>
      </section>

      <UspBand
        usps={service.usps}
      />

      <section className="mb-16 lg:mb-20 overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:-mx-12 xl:items-center">
            <div className="w-full lg:w-1/2 xl:w-5/12 lg:px-12 mb-5 lg:mb-0">
              <div className="w-full content content--reset lg:pr-12 xl:pr-0" dangerouslySetInnerHTML={{ __html: service.content }}></div>
            </div>

            {service.contentImage && (
              <div className="w-full lg:w-1/2 lg:px-12 ml-auto">
                <Img
                  backgroundColor={`#3B5CC4`}
                  fluid={service.contentImage.fluid}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      
      { service.featuredCaseStudy && (
        <FeaturedCaseStudy
          title={`Related Project <strong>&middot;</strong> ${service.featuredCaseStudy.title}`}
          slug={service.featuredCaseStudy.slug}
          blurb={service.featuredCaseStudy.teaserBlurb}
          image={service.featuredCaseStudy.teaserIpadImage}
        />
      )}

      <div id="form">
        <FormCta />
      </div>
    </>
  )
}

export default DigitalServicePage

export const query = graphql`
  query DigitalServiceQuery($slug: String!) {
    service: datoCmsService(slug: { eq: $slug }) {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      usps {
        heading
        blurb
      }
      title
      heroHeading
      heroExcerpt
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