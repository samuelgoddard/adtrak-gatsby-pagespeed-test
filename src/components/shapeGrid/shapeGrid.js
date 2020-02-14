import React from "react"
import Shape from "../shape/shape"

class ShapeGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    })
  }

  render() {
    let max_color_counter = 0;
    return (
      <>
        {!this.state.isLoading ? (
          <>
            <div className="hidden 2xl:block">
              <div className="grid">
                {Array.from(Array(25), (e, i) => {
                  max_color_counter > 1 ? max_color_counter = 0 : max_color_counter++
                  
                  return (
                    <div className="" key={i}>
                      <Shape
                        randomise={true}
                        colorIndex={max_color_counter}
                        forceColorRotate={true}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="hidden xl:block 2xl:hidden">
              <div className="grid">
                {Array.from(Array(20), (e, i) => {
                  max_color_counter > 1 ? max_color_counter = 0 : max_color_counter++
                  
                  return (
                    <div className="" key={i}>
                      <Shape
                        randomise={true}
                        colorIndex={max_color_counter}
                        forceColorRotate={true}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="hidden lg:block xl:hidden">
              <div className="grid">
                {Array.from(Array(18), (e, i) => {
                  max_color_counter > 1 ? max_color_counter = 0 : max_color_counter++
                  
                  return (
                    <div className="" key={i}>
                      <Shape
                        randomise={true}
                        colorIndex={max_color_counter}
                        forceColorRotate={true}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="hidden md:block lg:hidden">
              <div className="grid">
                {Array.from(Array(10), (e, i) => {
                  max_color_counter > 1 ? max_color_counter = 0 : max_color_counter++
                  
                  return (
                    <div className="" key={i}>
                      <Shape
                        randomise={true}
                        colorIndex={max_color_counter}
                        forceColorRotate={true}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="block md:hidden">
              <div className="grid">
                {Array.from(Array(8), (e, i) => {
                  max_color_counter > 1 ? max_color_counter = 0 : max_color_counter++
                  
                  return (
                    <div className="" key={i}>
                      <Shape
                        randomise={true}
                        colorIndex={max_color_counter}
                        forceColorRotate={true}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    )
  }
}

export default ShapeGrid