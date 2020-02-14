import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Triangle from "../triangle/triangle"

class CaseStudyTeaserImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      image: this.props.image,
      title: this.props.title,
    };
  }

  render() {
    return (
      <Link to={`${this.state.url}/`} className="block relative h-full transition group text-white text-white text-2xl md:text-2xl lg:text-3xl font-display leading-tight">
        <Img
          className="bg-grey"
          fluid={this.state.image}
        />
          <div className="bg-secondary-dark absolute top-0 left-0 right-0 bottom-0 z-0 opacity-0 group-hover:opacity-75 transition"></div>

          <div className="absolute bottom-0 left-0 right-0 pb-1 md:pb-2 pl-8 pl-8 pr-8 group-hover:pb-8 transition w-full">
            <div className="relative z-10 mb-1">
              { this.state.title }
            </div>
            <span className="block w-full text-base opacity-0 transition group-hover:opacity-100">
              Read more
              <span className="inline-block ml-2">
                <Triangle size="small" />
              </span>
            </span>
          </div>
      </Link>
    );
  }
}

export default CaseStudyTeaserImage

CaseStudyTeaserImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
}

CaseStudyTeaserImage.defaultProps = {
  slug: ``,
  title: ``,
  image: {},
}
