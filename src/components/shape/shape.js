import React, { Fragment } from "react"
import posed from "react-pose"
import { tween } from "popmotion"
import { interpolate } from "flubber"
import PropTypes from "prop-types"

const paths = {
  one:
    'M0, 200L-8.74228e-06, 0L200, 200L0, 200Z',
  two:
    'M100.022, 0C44.7787, 0, 0, 44.7787, 0, 100.022C0, 155.221, 44.7787, 200, 100.022 200H200.044V0H100.022Z',
  three:
    'M200, 0H0L100.022, 200L200, 0Z',
  four:
    'M0, 0H200L100.022, 100.022L200, 200H0V0Z',
  five:
    'M100.022 200.044C155.262 200.044 200.044 155.262 200.044 100.022C200.044 44.7813 155.262 0 100.022 0C44.7813 0 0 44.7813 0 100.022C0 155.262 44.7813 200.044 100.022 200.044Z',
  six:
    'M100.022 0H0V200H100.022C155.265 200 200.044 155.221 200.044 99.9782C200.044 44.7351 155.221 0 100.022 0Z',
  seven:
    'M-5.39984e-06 99.9782C-2.41745e-06 155.221 44.7787 200 100.022 200C155.221 200 200 155.221 200 99.9782L200 -0.0436167L-1.07997e-05 -0.0436096L-5.39984e-06 99.9782Z',
  eight:
    'M0 0L200 0L0 200L0 0Z',
  nine:
    'M100.022 0H0V200H100.022C155.265 200 200.044 155.221 200.044 99.9782C200.044 44.7351 155.221 0 100.022 0Z',
  ten:
    'M200 200H0L200 0V200Z'
};

const pathIds = Object.keys(paths);

const baseColors = {
  "secondary": "secondary",
  "secondary-light": "secondary-light",
  "primary": "primary"
};

const colorIds = Object.keys(baseColors);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1,
    duration: 250,
  }).pipe(interpolate(from, to));

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition,
    };

    return config;
  }, {})
);

class Shape extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pathIndex: props.randomise ? [Math.floor(Math.random()*pathIds.length)] : props.index,
      colorIndex: props.colorIndex,
      width: props.width,
      height: props.height,
      fill: props.fill,
      delay: props.delay,
      static: props.static,
      colors: [
        "secondary",
        "secondary-light",
        "primary"
      ],
      color: props.color,
    };
  }

  gotoNextTriggered = () => {
    const { pathIndex } = this.state;
    const nextIndex = pathIndex + 1;
    
    if (!this.props.static) {
      this.setState({
        pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
      });
    }
    
    if (!this.props.color) {
      this.setState({
        color: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
      })
    }
  };

  componentDidMount() {
    if (this.props.randomColor) {
      this.setState({
        color: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="w-full">
          <svg
            width={ this.state.width }
            height={ this.state.width }
            viewBox={`0 0 200 200`}
            onMouseOver={ this.props.forceColorRotate ? this.gotoNextTriggered : null }
            className={`text-${this.state.color ? this.state.color : colorIds[this.state.colorIndex] }`}
          >
            <Icon
              pose={pathIds[this.state.pathIndex]}
              fill="currentColor"
            />
          </svg>
        </div>
      </Fragment>
    );
  }
}

export default Shape

Shape.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  index: PropTypes.number,
  colorIndex: PropTypes.number,
  randomise: PropTypes.bool,
  delay: PropTypes.number,
  static: PropTypes.bool,
  forceColorRotate: PropTypes.bool,
  color: PropTypes.string,
  randomColor: PropTypes.bool,
}

Shape.defaultProps = {
  delay: 3500,
  width: `100%`,
  height: `100%`,
  fill: `black`,
  index: 0,
  colorIndex: 0,
  randomise: false,
  static: false,
  forceColorRotate: false,
  color: ``,
  randomColor: false,
}
