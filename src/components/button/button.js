import React from "react"
import PropTypes from "prop-types"

const Button = ({ modifier, link, label }) => (
  <a href={link} className={modifier ? "btn text-base btn--" + modifier : "btn text-base"}>
    {label}
  </a>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  modifier: PropTypes.string,
}

Button.defaultProps = {
  label: ``,
  link: ``,
  modifier: ``,
}

export default Button
