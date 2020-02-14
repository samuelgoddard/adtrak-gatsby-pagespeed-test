import React from "react"
import SEO from "../components/seo"
// import ShapeGrid from "../components/shapeGrid/shapeGrid"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Shape from "../components/shape/shape"
import UspBand from "../components/uspBand/uspBand"
import Triangle from "../components/triangle/triangle"
const slugify = require("slugify")

const IndexPage = ({ data: { page }, location }) => {
  let random = Math.floor(Math.random() * 8)
  return (
    <>
      <SEO
        titleOverride={page.metaTags && page.metaTags.title ? page.metaTags.title : page.title}
        descriptionOverride={page.metaTags && page.metaTags.description ? page.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={page.metaTags && page.metaTags.image ? page.metaTags.image.url : null}
      />

      <section>
        <div className="container container--3xl">
          <div className="relative mb-16 md:mb-24 lg:mb-32 flex flex-wrap">
            {/* <div className="flex-1 mb-12 lg:mb-0">
              <ShapeGrid />
            </div> */}

            <div className="w-full lg:w-7/12 xl:w-5/12 text-center mb-16 lg:mb-0">
              <div className="flex flex-wrap items-center h-full justify-center">
                <div>
                  <span className="h1 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-5 lg:px-24 2xl:px-36 font-display leading-tight block">{ page.heroHeading }<span className="text-primary">.</span></span>
                  
                  <div className="text-xl font-sans mb-6 font-light px-5 sm:px-10 md:px-24 leading-tight" dangerouslySetInnerHTML={{ __html: page.heroExcerpt }}></div>
                  
                  <p className="text-2xl font-display mb-8 px-5 sm:px-10 md:px-24 leading-tight">Call us for more information on <a href="tel:01159598900" className="text-primary block hover:text-primary-dark focus:text-primary-dark transition contactlink">0115 959 8900</a></p>

                  <div className="flex flex-wrap justify-center -mx-2">
                    <div className="px-2">
                      <Link to="/work/" className="btn btn--primary">Our Work</Link>
                    </div>
                    <div className="px-2">
                      <Link to="/contact/" className="btn btn--outline">Contact <span className="hidden sm:inline-block">us</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex-1">
              <ShapeGrid />
            </div> */}
          </div>
        </div>

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

        <div className="container mb-16 md:mb-32 lg:mb-40">
          <div className="flex flex-wrap xl:items-center">
            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="content content--reset" dangerouslySetInnerHTML={{ __html: page.content }}></div>

              <div className="overflow-hidden">
                <div className="flex flex-wrap sm:-mx-2">
                  <div className="w-full sm:w-auto sm:px-2 mb-4 sm:mb-0">
                    <Link to="/services/" className="btn btn--primary block w-full">Digital Services</Link>
                  </div>
                  <div className="w-full sm:w-auto sm:px-2">
                    <Link to="/contact/" className="btn btn--outline block w-full">Contact us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-5/12 xl:w-1/2 ml-auto">
              <Img fluid={page.contentImage.fluid} className="w-full" />
            </div>
          </div>
        </div>
      </section>
      
      { page.featuredCaseStudy && (
        <section className="overflow-hidden">
          <div className="container relative">
            <div className="flex flex-wrap items-center md:-mx-10 lg:-mx-12 xl:-mx-20 mb-12 md:mb-0 pb-6 md:pb-24 xl:pb-32">
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-10 lg:px-12 xl:px-20 mb-12 md:mb-0 relative">
                <Shape 
                  static={true}
                  index={random}
                  randomColor={true}
                />
                <div className="absolute top-0 md:right-0 w-full md:w-10/12 z-10">
                  <Img fluid={page.featuredCaseStudy.featuredImage.fluid} className="w-full" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-10 lg:px-12 xl:px-20 relative z-10">
                <span className="h1 block text-3xl md:text-4xl lg:text-6xl">{ page.featuredCaseStudy.heroHeading }</span>
                <div className="content content--reset mb-6 md:mb-10 max-w-2xl" dangerouslySetInnerHTML={{ __html: page.featuredCaseStudy.heroExcerpt }}></div>

                <div className="flex flex-wrap sm:-mx-2">
                  <div className="w-full sm:w-auto sm:px-2 mb-4 sm:mb-0">
                    <Link to={`/work/${page.featuredCaseStudy.slug}/`} className="btn btn--primary block w-full">Read More</Link>
                  </div>

                  <div className="w-full sm:w-auto sm:px-2">
                    <Link to="/contact/" className="btn btn--outline block w-full">Contact Us</Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="overflow-hidden relative pt-10 md:pt-16 2xl:pt-24">
        <div className="absolute w-full bottom-0 right-0">
          <div className="container--retina mx-auto">
            <div className="w-1/3 md:w-4/12 lg:w-3/12 2xl:w-2/12 ml-auto">
              <Shape 
                static={true}
                index={9}
                color="secondary"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full md:w-2/3 lg:w-8/12">
            <h2 className="h1">Your Marketing Agency</h2>
            <p className="text-lg lg:text-xl">With over 22 years of experience, we’re one of Nottingham’s longest standing and most reputable digital marketing companies. As a full-service agency, we have a wealth of knowledge and technical expertise and a proven track record of delivering results. Our ultimate aim is to ensure your business generates quality leads through a strategic and high-impact digital solution.</p>
          </div>

          <div className="bg-transparent mr-4 md:mr-8 mb-10 md:mb-16 lg:mb-20 xl:mb-24 relative z-10">
            <div className="flex flex-wrap md:-mx-8 pr-12 pt-16 pb-10 md:pt-20 md:pb-8 lg:pt-24 lg:pb-16">
              {page.ourServices.map(({ title, model, slug, treeParent, heroExcerpt, icon }, index) => {
                // Generate the top level slug from the models apiKey
                let slugged = slugify(model.apiKey + 's',{
                  lower: true,
                }).replace(/[_]/g, '-');
                let trimmedHeroExcerpt = heroExcerpt.replace(/^(.{120}[^\s]*).*/, "$1...");

                return (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-16 md:px-8 lg:mb-0">
                    { icon && (
                      // @TODO convert this to SVG component?
                      <svg width="35" height="35" className="block mb-8 lg:mb-10">
                        <image href={icon.url} src={icon.url} width="35" height="35"/>
                      </svg>
                    )}

                    <span className="h3 block mb-4">{ title }</span>

                    { heroExcerpt && (
                      <div className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: trimmedHeroExcerpt }}></div>
                    )}

                    <Link
                      // if it has a parent, pipe it into the link, if not leave it out 
                      to={treeParent ? `/${slugged}/${treeParent.slug}/${slug}` : `/${slugged}/${slug}`}
                      className="link text-lg text-secondary font-display"
                    >Read more <span className={`ml-2 inline-block text-primary`}><Triangle size={`small`} /></span></Link>
                  </div>
                )
              })}
            </div>
            <div className="w-full flex flex-wrap justify-center sm:-mx-2 pb-10 md:pb-24 lg:pb-24">
              <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:px-2">
                <Link to="/services/" className="btn btn--outline block w-full">Digital Services</Link>
              </div>
              <div className="w-full sm:w-auto  sm:px-2">
                <Link to="/creative-services/" className="btn btn--outline block w-full">Creative Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    page: datoCmsHome {
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
      heroExcerpt
      content
      contentImage {
        fluid(
          maxWidth: 700
          imgixParams: {h: "775", w: "700"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      slug
      featuredCaseStudy {
        ... on DatoCmsCaseStudy {
          id
          slug
          model {
            id
            apiKey
            name
          }
          heroHeading
          heroExcerpt
          featuredImage {
            fluid(imgixParams: {h: "775", w: "700", fit: "crop", crop: "center" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
        ... on DatoCmsCreativeCaseStudy {
          id
          slug
          model {
            id
            apiKey
            name
          }
          heroHeading
          heroExcerpt
          featuredImage {
            fluid(imgixParams: {h: "775", w: "700", fit: "crop", crop: "center"}) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
      ourServices {
        ... on DatoCmsService {
          id
          slug
          title
          heroExcerpt
          icon {
            url
          }
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
          id
          slug
          title
          heroExcerpt
          icon {
            url
          }
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