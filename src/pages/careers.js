import React from "react"
import SEO from "../components/seo"
import Triangle from "../components/triangle/triangle"
// import Instagram from "../components/instagram/instagram"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const CareersPage = ({ data: { careers, instaImage1, instaImage2, instaImage3, instaImage4, instaImage5, instaImage6 }, location}) => {
  return (
    <>
      <SEO
        titleOverride={"Careers"}
        descriptionOverride={"We’re proud of the way we work and the culture we have created. We’re a close-knit team and value collaboration and creativity."}
        pathnameOverride={location.pathname}
      />

      <section className="mb-6 lg:mb-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12 content lg:mb-0 lg:pl-12 xl:pl-24 pr-6 xl:pr-12 mb-12 lg:mb-0">
              <div className="content content--reset pt-4 lg:pt-8 xl:pt-12 pb-0 lg:pb-5 xl:pb-8">
                <h1 className="h2">Join Our Team</h1>
                <p>We’re proud of the way we work and the culture we have created. We’re a close-knit team and value collaboration and creativity.</p>
                
                <p>Our team is growing and we’re always on the lookout for new talent. Take a look at our current opportunities.</p>

                <a href="#opportunities" className="btn btn--primary w-full md:w-auto">Current Opportunities</a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:ml-auto">
              {/* <Instagram images={insta.edges} /> */}
              <div className="flex flex-wrap -mx-2 md:-mx-4 xl:-mx-6 insta">
                <div className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-12 px-2 md:px-4 xl:px-6 insta__object">
                  <Img fluid={ instaImage1.childImageSharp.fluid } className="w-full max-w-full object-cover insta__img"/>
                </div>
                <div className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-8 px-2 md:px-4 xl:px-6 insta__object">
                  <Img fluid={ instaImage2.childImageSharp.fluid } className="w-full max-w-full object-cover insta__img"/>
                </div>
                <div className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-8 px-2 md:px-4 xl:px-6 insta__object">
                  <Img fluid={ instaImage3.childImageSharp.fluid } className="w-full max-w-full object-cover insta__img"/>
                </div>
                <div className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-8 px-2 md:px-4 xl:px-6 insta__object">
                  <Img fluid={ instaImage4.childImageSharp.fluid } className="w-full max-w-full object-cover insta__img"/>
                </div>
                <div className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-8 px-2 md:px-4 xl:px-6 insta__object">
                  <Img fluid={ instaImage5.childImageSharp.fluid } className="w-full max-w-full object-cover insta__img"/>
                </div>
                <div className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-8 px-2 md:px-4 xl:px-6 insta__object">
                  <Img fluid={ instaImage6.childImageSharp.fluid } className="w-full max-w-full object-cover insta__img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 lg:mb-24" id="opportunities">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="bg-secondary p-10 lg:p-12 xl:p-24">
                <h3 className="text-white mb-5 lg:mb-8">What Makes Us Great?</h3>
                <ul>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Large social space</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">City centre location</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Learning &amp; development programmes</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Flexible working hours</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">NHS Top-Up scheme</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Regular social events</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Company pension</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Gym facilities</span></li>
                  <li className="text-base md:text-xl text-secondary-light font-display py-2 py-2 relative pl-5"><span className="text-primary absolute top-0 left-0 mt-2"><Triangle size="small" /></span><span className="inline">Ride-to-work scheme</span></li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="p-0 lg:p-12 xl:p-24">
                <h3 className="text-primary lg:text-center mb-4 lg:mb-6">Current Opportunities</h3>
                <ul>
                  {careers.edges.map(({ node }, index) => {
                    return(
                      <li key={index}>
                        <Link className="block text-lg lg:text-xl border-b-2 border-grey-light py-4 hover:text-primary focus:text-primary transition relative pl-5" to={`/careers/${node.slug}`}>
                          <span className="text-primary absolute top-0 left-0 mt-4"><Triangle size="small" /></span><span className="inline">{ node.title }</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage


// export const query = graphql`
//   query CareersPageQuery {
//     careers: allDatoCmsCareer {
//       edges {
//         node {
//           title
//           slug
//         }
//       }
//     }
//     insta: allInstaNode(sort: {order: DESC, fields: timestamp}, limit: 6) {
//       edges {
//         node {
//           localFile {
//             childImageSharp {
//               fixed(width: 500, height: 500) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query CareersPageQuery {
    instaImage1: file(relativePath: { eq: "insta1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instaImage2: file(relativePath: { eq: "insta2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instaImage3: file(relativePath: { eq: "insta3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instaImage4: file(relativePath: { eq: "insta4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instaImage5: file(relativePath: { eq: "insta5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instaImage6: file(relativePath: { eq: "insta6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    careers: allDatoCmsCareer {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`