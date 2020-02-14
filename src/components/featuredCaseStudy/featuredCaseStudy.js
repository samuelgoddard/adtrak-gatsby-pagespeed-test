import React from "react"
import PropTypes from "prop-types"
import Shape from "../shape/shape"
import Img from "gatsby-image"
import { Link } from "gatsby"

const FeaturedCaseStudy = ({ slug, image, blurb, title }) => (
  <section className="mb-16 lg:mb-24 lg:pb-16 pt-5 xl:pt-12 relative border-b border-grey-light">
    <div className="absolute bottom-0 right-0 w-1/2 md:w-5/12 lg:w-1/2 xl:w-5/12 z-0">
      <Shape 
        static={true}
        index={9}
        color="secondary-light"
      />
    </div>
    <div className="container">
      <div className="flex flex-wrap items-center mb-12 md:mb-0 pb-4 md:pb-16 lg:pb-8">
        <div className="w-full lg:w-5/12 xl:w-1/2 lg:ml-auto mb-12 md:mb-0 relative lg:order-2">
          <div className="relative z-10 w-full hidden lg:block">
            <Img fluid={image.fluid} className="w-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-5/12 lg:order-1 relative z-10">
          { title && (<span className="text-grey-dark text-base md:text-lg block mb-3" dangerouslySetInnerHTML={{ __html: title }}></span>)}
          <div className="text-2xl md:text-3xl lg:text-4xl font-display leading-snug mb-6 lg:mb-10" dangerouslySetInnerHTML={{ __html: blurb }}></div>
          
          <div className="flex flex-wrap sm:-mx-2">
            <div className="w-full sm:w-auto sm:px-2 mb-4 sm:mb-0">
              <Link className="btn btn--primary block w-full" to={`/work/${slug}`}>Find Out How</Link>
            </div>
            <div className="w-full sm:w-auto sm:px-2">
              <Link className="btn btn--outline block w-full" to={`/contact`}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

FeaturedCaseStudy.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  blurb: PropTypes.string
}

FeaturedCaseStudy.defaultProps = {
  slug: ``,
  title: ``,
  image: [],
  blurb: ``
}

export default FeaturedCaseStudy