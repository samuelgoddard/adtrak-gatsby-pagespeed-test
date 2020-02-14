import React from "react"
import PropTypes from "prop-types"
import Button from "../button/button"

const Hero = ({ heading, subHeading, excerpt }) => (
  <section className="m-hero bg-grey py-12 md:py-20">
    <div className="container relative z-10">
      <h2 className="mb-2">
        { heading }
      </h2>
      <h3 className="mb-5">{ subHeading }</h3>
      
      <div className="w-full md:w-2/3">
        <p className="mb-8 text-lg">{ excerpt }</p>
        <Button label={`Read more`} />
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  excerpt: PropTypes.string
}

Hero.defaultProps = {
  heading: ``,
  subHeading: ``,
  excerpt: ``
}

export default Hero