import React, { Component } from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"

class ImageRandomiser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      isLoading: true,
      randomImage: 0,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      randomImage: Math.floor(Math.random() * this.state.images.length),
    })
  }

  render() {
    return (
      <div className="bg-primary-filtered">
        {!this.state.isLoading ? (
          <div className="container">
            <Img fluid={this.state.images[this.state.randomImage].fluid} alt={this.state.images[this.state.randomImage].alt} className="w-full block mb-px opacity-100" />
          </div>
        ) : (
          <p>Loading Images...</p>
        )}
      </div>
    )
  }
}

ImageRandomiser.propTypes = {
  images: PropTypes.array,
}

ImageRandomiser.defaultProps = {
  images: [],
}

export default ImageRandomiser