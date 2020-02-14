import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Triangle from "../triangle/triangle"

class CaseStudyTeaser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      title: this.props.title,
    };
  }

  render() {
    return (
      <Link to={`${this.state.url}/`} className="block relative h-full">
        <div className="h-full h-24 bg-grey p-6 md:p-8 pt-48 md:pt-48 lg:pt-76 text-white flex flex-wrap items-end text-2xl md:text-2xl lg:text-3xl font-display transition group leading-tight">
          <div className="bg-secondary-dark absolute top-0 left-0 right-0 bottom-0 z-0 opacity-25 group-hover:opacity-75 transition"></div>

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
        </div>
      </Link>
    );
  }
}

export default CaseStudyTeaser

CaseStudyTeaser.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}

CaseStudyTeaser.defaultProps = {
  slug: ``,
  title: ``,
}
