import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Shape from "../components/shape/shape"
import FormCta from "../components/formCta/formCta"
import Triangle from "../components/triangle/triangle"
import FeaturedCaseStudy from "../components/featuredCaseStudy/featuredCaseStudy"

const slugify = require("slugify")

const CaseStudyPage = ({ data: { caseStudy }, location }) => {
  let random = Math.floor(Math.random() * 8)
  return (
    <>
      <SEO
        titleOverride={caseStudy.metaTags && caseStudy.metaTags.title ? caseStudy.metaTags.title : caseStudy.title}
        descriptionOverride={caseStudy.metaTags && caseStudy.metaTags.description ? caseStudy.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={caseStudy.metaTags && caseStudy.metaTags.image ? caseStudy.metaTags.image.url : null}
      />

      <section className="border-b border-grey md:border-0 overflow-hidden pb-6 mb-10 md:mb-6 md:pb-16 lg:mb-0 lg:pb-32">
        <div className="container relative">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="flex flex-wrap items-center md:-mx-10 lg:-mx-12 xl:-mx-20 mb-12 md:mb-0">
              {caseStudy.featuredImage && (
                <div className="w-full md:w-1/2 lg:w-5/12 md:px-10 lg:px-12 xl:px-20 mb-12 md:mb-0 relative">
                  <Shape 
                    static={true}
                    index={random}
                    randomColor={true}
                  />
                  <div className="absolute top-0 md:right-0 w-full md:w-10/12 z-10">
                    <Img fluid={caseStudy.featuredImage.fluid} className="w-full" />
                  </div>
                </div>
              )}
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-10 lg:px-12 xl:px-20 relative z-10">
                
                {/* @TODO Abstract to component */}
                <ol className="block mb-0">
                  <li className="text-grey-dark text-base" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                    <Link to="/work/" itemProp="url" className="text-grey-dark text-base underline hover:text-secondary-dark focus:text-secondary-dark transition">
                      <span itemProp="title">Work</span>
                    </Link> /
                  </li>
                </ol>

                <h1 className="text-3xl md:text-4xl lg:text-6xl">{ caseStudy.heroHeading }</h1>
                <div className="content content--reset mb-6 md:mb-10" dangerouslySetInnerHTML={{ __html: caseStudy.heroExcerpt }}></div>

                <div className="flex flex-wrap sm:-mx-2">
                  <div className="w-full sm:w-auto sm:px-2 mb-4 sm:mb-0">
                    <a href="#what-we-did" className="btn btn--primary block w-full mb-0 sm:mb-2">What We Did</a>
                  </div>
                  <div className="w-full sm:w-auto sm:px-2">
                    <Link to="/contact/" className="btn btn--outline block w-full">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-16 lg:mb-24 pb-12 md:pb-20 lg:pb-24 border-b border-grey overflow-hidden">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="flex flex-wrap md:-mx-6">
              {caseStudy.stats.map(({ heading, text }, index) => {
                return(
                  <div className="w-full md:w-1/3 text-center mb-6 md:mb-0 md:px-6" key={index}>
                    <span className="text-5xl md:text-6xl lg:text-7xl text-secondary block font-display">{ heading }</span>
                    <span className="text-xl xl:text-2xl block lg:px-6 xl:px-8 2xl:px-10" dangerouslySetInnerHTML={{ __html: text }}></span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-24 lg:mb-32" id="what-we-did">
        <div className="container">
          <div className="flex flex-wrap">
            <aside className="w-full md:w-4/12 lg:w-3/12 xl:w-2/12 order-2 md:order-1">
              <div className="lg:pb-10 sticky top-0 pt-12">
                { caseStudy.servicesUsed.length > 0 && (
                  <div className="border-b border-grey pb-8 mb-8">
                    <h4 className="text-primary mb-6">Services Used</h4>
                    
                    <nav aria-labelledby="servicesmenulabel" className="block mb-8">
                      <h2 id="servicesmenulabel" className="sr-only">Services Used Menu</h2>
                      <ul>
                        {caseStudy.servicesUsed.map(({ title, model, slug, treeParent }, index) => {
                          // Generate the top level slug from the models apiKey
                          let slugged = slugify(model.apiKey + 's',{
                            lower: true,
                          }).replace(/[_]/g, '-');

                          return (
                            <li key={index} className="w-full block mb-2">
                              <Link
                                // if it has a parent, pipe it into the link, if not leave it out 
                                to={treeParent ? `/${slugged}/${treeParent.slug}/${slug}` : `/${slugged}/${slug}`}
                                className="link text-lg hover:text-secondary focus:text-secondary"
                              ><span className="text-secondary mr-2">▸</span> { title }</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </nav>
                  </div>
                )}

                <div className="border-b border-grey pb-8 mb-8">
                  <span className="text-secondary text-xl mb-6 block">Adtrak is a full-service design, marketing and brand agency based in Nottingham.</span>

                  <Link to="/contact/" className="link text-xl font-display block text-secondary hover:text-secondary-dark focus:text-secondary-dark">
                    Get in touch
                    <span className={`ml-2 inline-block text-primary`}><Triangle size={`small`} /></span>
                  </Link>
                </div>
              </div>
            </aside>
            
            <article className="w-full md:w-8/12 lg:w-9/12 xl:w-10/12 md:pl-10 lg:pl-16 pt-12 order-1 md:order-2">
              <div className="flex flex-wrap">
                <div className="w-full xl:w-2/3 lg:pr-16 xl:pr-24 xl:pl-8 mb-8 xl:mb-0">
                  <span className="content block" dangerouslySetInnerHTML={{ __html: caseStudy.content }}></span>
                </div>
                <div className="w-full xl:w-1/3">
                  <div className="flex flex-wrap md:-mx-4 xl:mx-0 sticky top-0 xl:pt-12">
                    {caseStudy.supportingImages.map(({ fluid }, index) => {
                      return (
                        <div className="w-full md:w-1/2 xl:w-full md:px-4 xl:px-4 mb-8 md:mb-0 xl:mb-8" key={index}>
                          <Img key={index} backgroundColor={`#3B5CC4`} fluid={fluid} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </article>
          </div>

          { caseStudy.clientTestimonial && (
              <section className="mb-12 md:mb-16 lg:mb-32 overflow-hidden mt-16 md:mt-24 lg:mt-32">
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
        </div>
      </section>

      { caseStudy.featuredCaseStudy && (
        <FeaturedCaseStudy
          title={`Related Project <strong>&middot;</strong> ${caseStudy.featuredCaseStudy.title}`}
          slug={caseStudy.featuredCaseStudy.slug}
          blurb={caseStudy.featuredCaseStudy.teaserBlurb}
          image={caseStudy.featuredCaseStudy.teaserIpadImage}
        />
      )}

      <FormCta />
    </>
  )
}

export default CaseStudyPage

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    caseStudy: datoCmsCaseStudy(slug: { eq: $slug }) {
      title
      heroHeading
      heroExcerpt
      content
      clientTestimonial
      clientName
      stats {
        heading
        text
      }
      metaTags {
        title
        description
        twitterCard
        image {
          url
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
      featuredImage {
        fluid(imgixParams: {h: "775", w: "700", fit: "crop", crop: "center"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      supportingImages {
        fluid(imgixParams: {h: "720", w: "720", fit: "crop", crop: "center"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      servicesUsed {
        ... on DatoCmsService {
          slug
          title
          treeParent {
            title
            slug
          }
          model {
            id
            apiKey
            name
          }
        }
        ... on DatoCmsCreativeService {
          slug
          title
          treeParent {
            title
            slug
          }
          model {
            id
            apiKey
            name
          }
        }
      }
    }
  }
`