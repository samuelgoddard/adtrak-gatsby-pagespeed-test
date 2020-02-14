import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Triangle from "../triangle/triangle"

class BlogTeaser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.slug,
      title: this.props.title,
      author: this.props.author,
      category: this.props.category,
      colors: [
        "bg-secondary text-white",
        "bg-secondary-dark text-white",
        "bg-secondary-light text-secondary-dark",
        "bg-primary text-white"
      ],
      color: ``,
    };
  }

  componentDidMount() {
    this.setState({
      color: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
    })
  }

  render() {
    return (
      <Fragment>  
        <div className={`w-full md:w-1/2 xl:w-1/3 md:px-1 mb-2`}>
          <div className={`block h-full p-10 relative ${this.state.color}`}>
            <Link to={`/blog/${this.state.slug}/`} className="group transition">
              <div className="flex flex-wrap flex-col h-full w-full">

                <div className="h3 block mb-2 w-full" dangerouslySetInnerHTML={{ __html: this.state.title }}></div>

                { this.state.author && (
                  <div className="w-full mb-20 lg:mb-32">
                    <span className="block text-lg opacity-50">By {this.state.author}</span>
                  </div>
                )}
                
                {/* <div className="mt-auto w-full self-end">
                  <span className="font-display mt-auto text-lg">
                    Cat: { this.state.category }
                    Read More
                    <span className="inline-block ml-2"><Triangle size="small" /></span>
                  </span>
                </div> */}

                <div className="absolute bottom-0 left-0 right-0 pb-1 md:pb-2 pl-10 pr-8 group-hover:pb-8 transition w-full">
                  <span className="relative z-10 mb-1 opacity-50">
                    { this.state.category }
                  </span>
                  <span className="block w-full text-base opacity-0 transition font-display group-hover:opacity-100">
                    Read more
                    <span className="inline-block ml-2">
                      <Triangle size="small" />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogTeaser

BlogTeaser.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  color: PropTypes.string,
  category: PropTypes.string,
}

BlogTeaser.defaultProps = {
  slug: ``,
  title: ``,
  author: ``,
  color: ``,
  category: ``,
}
