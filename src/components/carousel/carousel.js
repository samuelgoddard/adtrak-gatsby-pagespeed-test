import React, { Component } from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"
import EmblaCarouselReact from 'embla-carousel-react'

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <div className="relative w-full">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-wrap items-center z-10">
              <button
                className="bg-white text-primary h-10 w-10 md:w-12 md:h-12 lg:h-16 lg:w-16 flex text-3xl md:text-4xl lg:text-5xl leading-none items-center justify-center"
                onClick={() => this.embla.scrollPrev()}
              >
                ◂
              </button>
              <button
                className="bg-white text-primary h-10 w-10 md:w-12 md:h-12 lg:h-16 lg:w-16 flex text-3xl md:text-4xl lg:text-5xl ml-auto leading-none items-center justify-center"
                onClick={() => this.embla.scrollNext()}
              >
                ▸
              </button>
            </div>
            <EmblaCarouselReact
              emblaRef={c => (this.embla = c)}
              htmlTagName={`div`}
              options={{ 
                loop: true,
                speed: 5
              }}
              className="embla w-full"
            >
              <div className="embla__container max-w-full">
                {this.state.images.map((image, index) =>
                  <div
                    key={index}
                    className="embla__slide"
                  >
                    <Img fluid={image.fluid} key={image.title} alt={image.alt} className="w-full block mb-px" />
                  </div>
                )}
              </div>
            </EmblaCarouselReact>
          </div>
        ) : (
          <p>Loading Reviews&hellip;</p>
        )}
      </>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.array,
}

Carousel.defaultProps = {
  images: [],
}

export default Carousel