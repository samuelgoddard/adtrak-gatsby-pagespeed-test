import React from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: this.props.navItems,
      socialItems: this.props.socialItems
    };
  }

  render() {
    return (
      <footer className="py-10 md:py-16 overflow-hidden">
        <div className="container">
          <nav aria-labelledby="footermenulabel" className="mb-16 hidden lg:block">
            <h2 id="footermenulabel" className="sr-only">Footer Menu</h2>
            <ul className="block">
              {this.state.navItems.map(({ title, url }, index) =>
                <li key={index} className="inline-block mr-10">
                  <Link to={`${url}/`} activeClassName="is--active" className="link text-primary text-lg">{title}</Link>
                </li>
              )}
              <li className="inline-block mr-10">
                <Link to={"/careers/"} activeClassName="is--active" className="link text-primary text-lg">Careers</Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap md:items-center mb-4 lg:-mx-8">
            <div className="w-full lg:w-5/12 lg:px-8 order-2 lg:order-1">
              <div className="w-12 mb-5">
                <Logo modifier={`small`} />
              </div>

              <span className="text-grey-dark text-sm md:text-lg">Adtrak is a registered company in England.<br/>&copy; Adtrak 2019. All Rights Reserved.</span>

              <div className="mt-2">
                <Link to="/privacy-policy/" className="text-grey-dark text-sm md:text-base underline hover:text-secondary-dark focus:text-secondary-dark">Privacy Policy</Link>
              </div>
            </div>

            <div className="w-full lg:w-7/12 lg:px-8 mb-10 lg:mb-0 order-1 lg:order-2">
              <div className="flex flex-wrap md:-mx-3">
                <div className="w-full md:w-1/3 md:px-3 mb-6 md:mb-0">
                  <div className="text-secondary-dark block">
                    <span>Adtrak</span>
                    <div>
                      <span className="block">
                        Level 3, Chapel Quarter<br/>
                        Maid Marian Way
                      </span>
                      <span className="block">Nottingham</span>
                      <span className="block">NG1 6HQ</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 md:px-3 mb-6 md:mb-0">
                  <address className="not-italic">
                    <div>
                      <a href="tel:01159598900" className="text-secondary-dark hover:text-secondary focus:text-secondary inline-block contactlink">0115 959 8900</a>
                    </div>
                    <div>
                      <a href="mailto:hello@adtrak.co.uk" className="text-secondary-dark hover:text-secondary focus:text-secondary inline-block contactlink">hello@adtrak.co.uk</a>
                    </div>
                  </address>
                </div>
                
                <div className="w-full md:w-1/3 md:px-3 mb-6 md:mb-0 overflow-hidden">
                  <div className="flex flex-wrap -mx-3">
                    {this.state.socialItems.map(({ title, url, icon }, index) =>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="transition text-secondary-dark text-lg hover:text-secondary focus:text-secondary px-3" aria-label={`Navigate to ${title}`} key={index}>
                        <FontAwesomeIcon icon={['fab', icon]} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  navItems: PropTypes.array,
  socialItems: PropTypes.array
}

Footer.defaultProps = {
  navItems: [],
  socialItems: []
}

export default Footer