import React from "react"
import PropTypes from "prop-types"

const Triangle = ({ position, size, color }) => (
  <span className={`triangle triangle__${position} triangle__${size} inline-block`}>
  </span>
)

Triangle.propTypes = {
  position: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}

Triangle.defaultProps = {
  position: ``,
  size: ``,
  color: ``
}

export default Triangle
