import React from "react"
import PropTypes from "prop-types"

const UspBand = ({ usps }) => (
  <div className="bg-secondary py-12 md:py-24 overflow-hidden mb-16 lg:mb-32">
    <div className="container">
      <div className="flex flex-wrap lg:-mx-6">
        {usps.map(({heading, blurb}, i) => {
          return (
            <div
              key={i}
              className={ i === 2 ? `w-full lg:w-1/3 mb-4 lg:mb-0 lg:px-6 text-center` : `w-full lg:w-1/3 mb-12 lg:mb-0 lg:px-6 text-center`}
            >
              <span className="h4 text-secondary-light mb-8 block">{heading}</span>
              <div className="text-white lg:px-8 text-lg" dangerouslySetInnerHTML={{ __html: blurb }}></div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

UspBand.propTypes = {
  usps: PropTypes.array,
}

UspBand.defaultProps = {
  usps: [],
}

export default UspBand