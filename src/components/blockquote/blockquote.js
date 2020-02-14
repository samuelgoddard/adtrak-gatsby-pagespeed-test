import React from "react"
import PropTypes from "prop-types"

const BlockQuote = ({ text, type }) => (
  <blockquote className={`blockquote__${type}`}>
    <p>{text}</p>
  </blockquote>
)

BlockQuote.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
}

BlockQuote.defaultProps = {
  text: ``,
  type: ``,
}

export default BlockQuote
