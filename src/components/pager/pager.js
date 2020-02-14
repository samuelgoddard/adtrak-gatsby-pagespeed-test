import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

class Pager extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: ``,
    };
  }

  render() {
    return (
      <div className="flex flex-wrap items-center justify-center">
        <Link
          to={`/${this.props.prefix}`}
          className={
            1 === this.props.current
            ? `flex justify-center items-center rounded-full w-8 h-8 block bg-primary font-display text-lg p-1 mx-1 text-white`
            : `font-display text-lg p-1 mx-1 text-secondary-dark`
          }
        >
          1
        </Link>
        {this.props.limit.map((i) => {
          if(i > 1) {
            return (
              <Link
                to={`/${this.props.prefix}/${i}`}
                key={i}
                className={
                  i === this.props.current
                  ? `flex justify-center items-center rounded-full w-8 h-8 block bg-primary font-display text-lg p-1 mx-1 text-white`
                  : `font-display text-lg p-1 mx-1 text-secondary-dark`
                }
              >
                <span>{i}</span>
              </Link>
            )
          } else {
            return (
              <div key={i}></div>
            )
          }
        })}
      </div>
    );
  }
}

export default Pager

Pager.propTypes = {
  prefix: PropTypes.string,
  current: PropTypes.number,
  limit: PropTypes.array,
}

Pager.defaultProps = {
  prefix: ``,
  current: ``,
  limit: [],
}
