import React from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import posed, { PoseGroup } from 'react-pose';

const Overlay = posed.div({
  enter: {
    opacity: 1,
    transition: {
      default: { duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      default: { duration: 300 }
    }
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      overlay: false,
      navItems: this.props.navItems,
      socialItems: this.props.socialItems
    };

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  
  toggleOverlay = () => {
    this.setState({
      overlay: !this.state.overlay
    });
  }

  toggleOff = () => {
    this.setState({
      overlay: false
    });
  }

  render() {
    return (
      <header className="py-8 sm:py-10 lg:py-16 pb-6 sm:pb-8 lg:pb-12">
        <div className="container">
          <div className="flex flex-wrap items-center mb-4">
            <Link to="/" aria-label="Return to the homepage">
              <Logo color={`secondary-dark`} />
            </Link>
            <div className="ml-auto">
              <nav aria-labelledby="mainmenulabel">
                <h2 id="mainmenulabel" className="sr-only">Main Menu</h2>
                <ul>
                  {this.state.navItems.map(({ title, url }, index) =>
                    <li key={index} className="mx-3 xl:mx-5 2xl:mx-8 hidden lg:inline-block">
                      <Link to={`${url}/`} activeClassName="is--active" partiallyActive={true} className="link text-lg hover:text-primary focus:text-primary">{title}</Link>
                    </li>
                  )}

                  <li className="ml-5 mx-3 xl:mx-5 2xl:mx-8 mr-0 xl:mr-0 2xl:mr-0 hidden md:inline-block">
                    <a href="tel:01159598900" className="btn btn--small btn--secondary-light align-middle lg:text-lg contactlink">
                      <FontAwesomeIcon className="mr-1 inline-block w-4 h-4" icon="phone-alt" size="sm" /> 0115 959 8900
                    </a>
                  </li>

                  <li className="inline-block ml-5 mx-3 xl:mx-5 2xl:mx-8 mr-0 lg:hidden">
                    <button className="btn btn--small btn--secondary-dark align-middle" onClick={this.toggleOverlay}>
                      <FontAwesomeIcon className="text-xs mr-2 inline-block w-3 h-4" icon="bars" size="sm" />
                      {this.state.overlay ? (<span>Close</span>) : (<span>Menu</span>)}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
          <nav aria-labelledby="mobileMenuTrayToggle">
            <h2 id="mobileMenuTrayToggle" className="sr-only">Mobile Menu Tray</h2>
            <ul className="flex flex-wrap items-center">
              <li className="flex-1">
                <a href="tel:01159598900" className="btn btn--small btn--secondary-light block w-full text-center contactlink">
                  <FontAwesomeIcon className="mr-1 inline-block w-4 h-4" icon="phone-alt" size="sm" /> 0115 959 8900
                </a>
              </li>

              <li className="flex-1">
                <button className="btn btn--small btn--secondary-dark block w-full text-center" onClick={this.toggleOverlay}>
                  <FontAwesomeIcon className="text-xs mr-2 inline-block w-3 h-4" icon="bars" size="sm" />
                  {this.state.overlay ? (<span>Close</span>) : (<span>Menu</span>)}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <PoseGroup>
          {this.state.overlay && (
            <Overlay key="overlay" className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-secondary-dark text-white z-40 p-8">
              
              <div className="flex flex-wrap items-center mb-16">
                <Logo color={`white`} modifier={`small`} />
                
                <button className="btn--reset p-1 ml-auto" onClick={this.toggleOverlay}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18"><path fill="#FFF" d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                </button>
              </div>

              <nav aria-labelledby="mobileMenuOverlayLabel" className="mb-16">
                <h2 id="mobileMenuOverlayLabel" className="sr-only">Mobile Menu</h2>
                <ul>
                  <li className="text-white lg:block mb-2">
                    <Link onClick={this.toggleOverlay} to="/" activeClassName="is--active" className="link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white text-2xl text-white">Home</Link>
                  </li>
                  {this.state.navItems.map(({ title, url }, index) =>
                    <li key={index} className="text-white lg:block mb-2">
                      <Link onClick={this.toggleOverlay} to={url} activeClassName="is--active" partiallyActive={true} className="link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white text-2xl text-white">{title}</Link>
                    </li>
                  )}
                  <li className="text-white lg:block mb-2">
                    <Link onClick={this.toggleOverlay} to="/careers" activeClassName="is--active" className="link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white text-2xl text-white">Careers</Link>
                  </li>
                </ul>
              </nav>

              <div className="flex flex-wrap -mx-3">
                {this.state.socialItems.map(({ title, url, icon }, index) =>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="transition text-primary text-xl hover:text-primary-dark focus:text-primary-dark px-3" aria-label={`Navigate to ${title}`} key={index}>
                    <FontAwesomeIcon icon={['fab', icon]} />
                  </a>
                )}
              </div>
            </Overlay>
          )}
        </PoseGroup>
      </header>
    )
  }
}

Header.propTypes = {
  navItems: PropTypes.array,
  socialItems: PropTypes.array
}

Header.defaultProps = {
  navItems: [],
  socialItems: []
}

export default Header