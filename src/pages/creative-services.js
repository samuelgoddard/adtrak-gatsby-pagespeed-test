import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Triangle from "../components/triangle/triangle"

const slugify = require("slugify")

const CreativeServicesLandingPage = ({ data: { services, page }, location }) => {
  return (
    <>
      <SEO
        titleOverride={page.metaTags && page.metaTags.title ? page.metaTags.title : page.title}
        descriptionOverride={page.metaTags && page.metaTags.description ? page.metaTags.description : null}
        pathnameOverride={location.pathname}
        imageOverride={page.metaTags && page.metaTags.image ? page.metaTags.image.url : null}
      />

      <section className="mb-16 lg:mb-24 bg-secondary text-white pt-16 pb-16">
        <div className="container">
          <div className="w-full 2xl:w-10/12 mx-auto">
            <div className="w-full md:w-9/12 lg:w-8/12 mx-auto text-center">
              <h1>{ page.heroHeading }</h1>
              <div className="content content--reset md:w-10/12 md:mx-auto" dangerouslySetInnerHTML={{ __html: page.heroExcerpt }}></div>
              <Link className="btn btn--primary capitalize" to="/work/">View our work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-16 overflow-hidden">
        <div className="container">
          <div className="w-full md:w-10/12 mx-auto">
            <div className="flex flex-wrap md:-mx-12">
              {services.edges.map(({ node }, index) => {
                let slugged = slugify(node.model.apiKey + 's',{
                  lower: true,
                }).replace(/[_]/g, '-');
                return(
                  <div key={index} className="w-full text-center sm:text-left sm:w-1/2 md:w-1/3 lg:w-1/4 md:px-12 mb-8 pb-6 md:mb-16 md:pb-0">

                    { node.icon && (
                      // @TODO convert this to SVG component?
                      <svg width="35" height="35" className="block mb-8 lg:mb-10 mx-auto sm:mx-0">
                        <image href={node.icon.url} src={node.icon.url} width="35" height="35"/>
                      </svg>
                    )}

                    <Link to={`/${slugged}/${node.slug}/`} className="h3 text-2xl lg:text-2xl xl:text-3xl text-secondary block mb-6 hover:text-secondary-dark focus:text-secondary-dark transition">{ node.title }</Link>

                    <nav aria-labelledby="webdesignmenu">
                      <h2 id="webdesignmenu" className="sr-only">{ node.title } Menu</h2>
                      <ul className="block">
                        <li className="block" key={index}>
                          <Link to={`/${slugged}/${node.slug}/`} className="link hover:text-primary focus:text-primary text-lg mb-2 block"><span className={`mr-2 inline-block text-primary`}><Triangle size={`small`} /></span> { node.title }</Link>
                        </li>
                        {node.treeChildren.length > 0 && (
                          <>
                            {node.treeChildren.map(({ title, slug, treeParent }, index) =>
                              <>
                                <li className="block" key={index}>
                                  <Link to={`/${slugged}/${treeParent.slug}/${slug}/`} className="link hover:text-primary focus:text-primary text-lg mb-2 block"><span className={`mr-2 inline-block text-primary`}><Triangle size={`small`} /></span> { title }</Link>
                                </li>
                              </>
                            )}
                          </>
                        )}
                      </ul>
                    </nav>
                  </div>
                )
              })}
              <div className="w-full hidden lg:block lg:flex-1 mb-8 md:mb-16 border border-secondary text-secondary">
                <div className="h-full p-10 flex flex-wrap items-center">
                  <div className="w-full">
                    <span className="block text-xl mb-6">Our creative services help businesses generate leads.</span>
                  </div>
                  <div className="w-full">
                    <Link to="/work/" className="text-secondary font-display text-xl mb-0 pb-0">See our work <span className="ml-2 inline-block text-primary"><Triangle size={`small`} /></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 lg:mb-24">
        <p className="text-2xl lg:text-3xl text-center font-display mb-8 px-12 md:px-24 leading-tight align-middle">Get in touch today on <a href="tel:01159598900" className="text-primary hover:text-primary-dark focus:text-primary-dark transition inline-block break-all contactlink">0115 959 8900</a> or <span className="ml-2 align-middle"><Link to="/contact/" className="btn btn--outline text-base">Get in touch</Link></span></p>
      </section>
    </>
  )
}

export default CreativeServicesLandingPage

export const query = graphql`
  query CreativeServicesLandingPageQuery {
    services: allDatoCmsCreativeService(filter: { root: { eq: true } }, sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          model {
            apiKey
          }
          icon {
            url
          }
          treeChildren {
            title
            slug
            treeParent {
              slug
            }
          }
        }
      }
    }

    page: datoCmsCreativeServicesLanding {
      title
      heroHeading
      heroExcerpt
      slug
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
