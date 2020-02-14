import React from "react"
import SEO from "../components/seo"
import Shape from "../components/shape/shape"
import ApplicationForm from "../components/applicationForm/applicationForm"
import { graphql, Link } from "gatsby"

const Career = ({ data: { career }, location }) => {
  return (
    <>
      <SEO
        titleOverride={career.title}
        descriptionOverride={career.metaTags && career.metaTags.description}
        pathnameOverride={location.pathname}
        imageOverride={career.metaTags && career.metaTags.image ? career.metaTags.image.url : null}
        jobDescription={career.description}
        jobDatePosted={career.datePosted}
        jobClosingDate={career.closingDate}
      />

      <section className="pb-16 md:pb-32 mb-16 lg:mb-32 border-b-2 border-grey">
        <div className="container">
          <div className="w-full md:w-1/2 text-center mx-auto mb-8 md:mb-0">
              <ol className="block mb-0">
                <li className="text-grey-dark text-base" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                  <Link to="/careers/" itemProp="url" className="text-grey-dark text-base underline hover:text-secondary-dark focus:text-secondary-dark transition">
                    <span itemProp="title">Careers</span>
                  </Link> /
                </li>
              </ol>
            <h1>{ career.title }</h1>
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
            <div className="content" dangerouslySetInnerHTML={{ __html: career.description }}></div>
          </div>
        </div>
      </section>

      <section className="mb-16 lg:mb-32">
        <div className="container">
          <h2 className="text-center mb-8 md:mb-12">Sound good? Apply today.</h2>
          <ApplicationForm applyingFor={career.title} />
        </div>
      </section>
    </>
  )
}

export default Career

export const query = graphql`
  query careerQuery($slug: String!) {
    career: datoCmsCareer(slug: { eq: $slug }) {
      title
      description
      datePosted
      closingDate
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