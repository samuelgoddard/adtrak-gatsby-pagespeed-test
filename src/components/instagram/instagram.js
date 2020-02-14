import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Instagram = ({ images }) => (
  <div className="flex flex-wrap -mx-2 md:-mx-4 xl:-mx-6 insta">
    {images.map(({ node }, index) => (
      <div key={index} className="w-1/2 md:w-1/3 mb-3 md:mb-5 xl:mb-8 px-2 md:px-4 xl:px-6 insta__object">
        <Img
          fixed={ node.localFile.childImageSharp.fixed } 
          className="w-full max-w-full object-cover insta__img"
        />
      </div>
    ))}
  </div>
)

Instagram.propTypes = {
  images: PropTypes.array,
}

Instagram.defaultProps = {
  images: [],
}

export default Instagram
