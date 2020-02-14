import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import FormCta from "../components/formCta/formCta"
import CaseStudyTeaser from "../components/caseStudyTeaser/caseStudyTeaser"
import CaseStudyTeaserImage from "../components/caseStudyTeaserImage/caseStudyTeaserImage"
import Carousel from "../components/carousel/carousel"

const CreativeCaseStudyPage = ({ data: { caseStudy }, location }) => {
  return (
    <>
      <SEO
        titleOverride={caseStudy.metaTags && caseStudy.metaTags.title ? caseStudy.metaTags.title : caseStudy.title}
        descriptionOverride={caseStudy.metaTags && caseStudy.metaTags.description ? caseStudy.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={caseStudy.metaTags && caseStudy.metaTags.image ? caseStudy.metaTags.image.url : null}
      />

      <section className="mb-10 md:mb-16 lg:mb-24 overflow-hidden">
        <div className="container">
          <div className="lg:w-10/12 mx-auto">

            {/* @TODO Abstract to component */}
            <ol className="block mb-1">
              <li className="text-grey-dark text-base" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                <Link to="/work/" itemProp="url" className="text-grey-dark text-base underline hover:text-secondary-dark focus:text-secondary-dark transition">
                  <span itemProp="title">Work</span>
                </Link> /
              </li>
            </ol>

            <div className="flex flex-wrap md:-mx-10">
              <div className="w-full md:w-5/12 md:px-10">
                <h1 className="text-primary text-3xl lg:text-4xl">{ caseStudy.heroHeading }</h1>
              </div>

              <div className="w-full md:w-7/12 md:px-10 mb-10 md:mb-16 lg:mb-20">
                <div className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: caseStudy.heroExcerpt }}></div>
              </div>
            </div>
          </div>

          { !caseStudy.videoEmbed && caseStudy.featuredImage && (
            <Img
              className="w-full h-auto"
              backgroundColor={`#3B5CC4`}
              fluid={caseStudy.featuredImage.fluid}
            />
          )}
          
          { caseStudy.videoEmbed && (
            <div dangerouslySetInnerHTML={{ __html: caseStudy.videoEmbed }}></div>
          )}
        </div>
      </section>

      { caseStudy.whatWeDidContent && (
        <section className="mb-10 md:mb-16">
          <div className="container">
            <div className="lg:w-10/12 mx-auto">
              <div className="flex flex-wrap md:-mx-10">
                <div className="w-full md:w-5/12 md:px-10 mb-6 md:mb-0">
                  <h2 className="text-primary text-2xl lg:text-3xl mb-2">What Did We Do?</h2>
                  <span className="text-grey-dark text-lg">{caseStudy.title}</span>
                </div>

                <div className="w-full md:w-7/12 md:px-10 mb-10 md:mb-16 lg:mb-20">
                  <div className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: caseStudy.whatWeDidContent }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      { caseStudy.supportingImagery.length > 0 && (
        <section className="mb-0 md:mb-6 lg:mb-12 xl:mb-16 overflow-hidden">
          <div className="container">
            <div className="flex flex-wrap md:-mx-5 lg:-mx-8 xl:-mx-12">
              {caseStudy.supportingImagery.map(({ fluid }, index) => {
                return(
                  <div
                    key={index}
                    className={caseStudy.supportingImagery.length > 2 ? "w-full md:w-1/2 md:px-5 lg:px-8 xl:px-12 mb-8 lg:mb-24" : "w-full md:w-1/2 md:px-5 lg:px-8 xl:px-12 mb-6" }
                  >
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
      )}

      { caseStudy.supportingImageryWide && (
        <section className="mb-6 md:mb-6 lg:mb-12 xl:mb-20 overflow-hidden">
          <div className="container">
            <Img
              className="w-full h-auto"
              backgroundColor={`#3B5CC4`}
              fluid={caseStudy.supportingImageryWide.fluid}
            />
          </div>
        </section>
      )}

      { caseStudy.gallery.length > 0 && (
        <section className="mb-6 md:mb-16 lg:mb-24 overflow-hidden">
          <div className="container">
            <Carousel images={caseStudy.gallery} />
          </div>
        </section>
      )}
      
      { caseStudy.clientTestimonial && (
        <section className="mb-12 md:mb-16 lg:mb-32 overflow-hidden">
          <div className="container">
            <blockquote className="blockquote__testimonial max-w-4xl mx-auto">
              <div className="text-lg md:text-xl mb-6" dangerouslySetInnerHTML={{ __html: caseStudy.clientTestimonial }}></div>
              
              { caseStudy.clientTestimonial && caseStudy.clientName && (
                <footer>— <span className="text-lg md:text-xl font-display">{ caseStudy.clientName }</span></footer>
              )}
            </blockquote>
          </div>
        </section>
      )}

      { caseStudy.relatedCaseStudies.length > 0 && (
        <section className="mb-8 md:mb-20 lg:mb-32 overflow-hidden">
          <div className="container">
            <div className="flex flex-wrap md:-mx-4 xl:-mx-6">
              {caseStudy.relatedCaseStudies.map(({ title, slug, teaserImage }, index) => {
                return(
                  <div key={index} className="w-full md:w-1/3 md:px-4 xl:px-6 mb-8">
                    { teaserImage && (
                      <CaseStudyTeaserImage
                        url={`/work/${slug}`}
                        image={teaserImage.fluid}
                        title={title}
                      />
                    )}
                    { !teaserImage && (
                      <CaseStudyTeaser 
                      url={`/work/${slug}`}
                      title={title}
                    />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <FormCta />
    </>
  )
}

export default CreativeCaseStudyPage

export const query = graphql`
  query CreativeCaseStudyQuery($slug: String!) {
    caseStudy: datoCmsCreativeCaseStudy(slug: { eq: $slug }) {
      title
      videoEmbed
      featuredImage {
        fluid(
          maxWidth: 1600
          imgixParams: {
            h: "700", w: "1600", fit: "crop", crop: "faces, edges"
          }
        ){
          ...GatsbyDatoCmsFluid
          src
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
      heroHeading
      heroExcerpt
      whatWeDidContent
      clientTestimonial
      clientName
      relatedCaseStudies {
        title
        slug
        teaserImage {
          fluid(
            maxWidth: 740
            imgixParams: {h: "740", w: "740", fit: "crop", crop: "faces, edges"}) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
      }
      gallery {
        fluid(
          maxWidth: 1600
          imgixParams: {h: "900", w: "1600", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      supportingImagery {
        fluid(
          maxWidth: 740
          imgixParams: {h: "740", w: "740", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      supportingImageryWide {
        fluid(
          maxWidth: 1600
          imgixParams: {h: "700", w: "1600", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`