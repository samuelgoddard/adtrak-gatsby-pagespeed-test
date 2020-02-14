import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import CookieConsent from "react-cookie-consent"

import Process from "../components/process/process"
import Reviews from "../components/reviews/reviews"
import ImageRandomiser from "../components/imageRandomiser/imageRandomiser"
import Header from "./header/header"
import Footer from "./footer/footer"
import Img from "gatsby-image"

import "../styles/main.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPhoneAlt, faStar, faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(faPhoneAlt, faStar, faLinkedinIn, faFacebookF, faTwitter, faInstagram, faBars, faTimes, faEnvelope)

const navItems = [
  {
    title: "Who We Are",
    url: "/who-we-are/"
  },{
    title: "Digital",
    url: "/services/"
  },{
    title: "Creative",
    url: "/creative-services/"
  },{
    title: "Our Work",
    url: "/work/"
  },{
    title: "Blog",
    url: "/blog/"
  },{
    title: "Contact",
    url: "/contact/"
}]

const socialItems = [
  {
    title: "Facebook",
    url: "https://en-gb.facebook.com/adtrak",
    icon: "facebook-f"
  },{
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/adtrak",
    icon: "linkedin-in"
  },{
    title: "Twitter",
    url: "https://twitter.com/adtrak",
    icon: "twitter"
  },{
    title: "Instagram",
    url: "https://www.instagram.com/adtrak",
    icon: "instagram"
}]

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      google: file(relativePath: { eq: "google-premier.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bing: file(relativePath: { eq: "bing-accredited.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath: { eq: "adtrakchairs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "adtrakchairs2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "adtrakchairs3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imagesForRandomiser = [
    data.image.childImageSharp,
    data.image2.childImageSharp,
    data.image3.childImageSharp,
  ]

  return (
    <div className="pb-8 md:pb-0">
      <Header
        siteTitle={"Adtrak"}
        navItems={navItems}
        socialItems={socialItems}
      />
      
        {children}

        { (location.pathname === '/contact' || location.pathname === '/contact/' || location.pathname === '/who-we-are' || location.pathname === '/who-we-are/') ? '' : <Process /> }
        
        { (location.pathname === '/contact' || location.pathname === '/contact/') ? '' : <ImageRandomiser images={imagesForRandomiser} /> }

        <section className="py-12 md:py-20 lg:py-32 border-b-2 border-grey">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-5/12 order-2 lg:order-1">
                <span className="h2 block mb-8">Looking for more leads for your business? Let's work together.</span>
                
                { (location.pathname === '/contact' || location.pathname === '/contact/') ? (
                  <a href="#form" className="btn capitalize">Start your journey</a>
                ) : (
                  <Link to="/contact/" className="btn capitalize">Start your journey</Link>
                )}
              </div>

              <div className="w-full lg:w-1/2 md:mx-auto order-1 lg:order-2 mb-8 md:mb-0 flex flex-wrap items-center justify-end">

                <div className="block mx-auto xl:mx-3 2xl:mx-10 mb-8 xl:mb-0 px-8 xl:px-2">
                  <Img className="block w-40" fluid={data.google.childImageSharp.fluid} />
                </div>

                <div className="block mx-auto xl:mx-3 2xl:mx-10 mb-8 xl:mb-0 px-8 xl:px-2">
                  <Reviews />
                </div>
                <div className="block mx-auto xl:mx-3 2xl:mx-10 mb-8 xl:mb-0 px-8 xl:px-2">
                  <Img className="block w-40" fluid={data.bing.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer
          navItems={navItems}
          socialItems={socialItems}
        />

        <CookieConsent
            location="bottom"
            style={{ background: "#F5F5F5", justifyContent: "center", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "20px", paddingRight: "10px", opacity: "90%" }}
            buttonClasses="btn btn--smaller btn--outline w-full block md:w-auto md:inline-block pl"
            contentStyle={{ margin: "0px", padding: "0px" }}
            buttonStyle={{ marginTop: "0px", marginBottom: "0px", background: "#12284C", color: "#FFFFFF", marginLeft: "0px", fontSize: "14px", border: "1px solid #12284C", display: "block" }}
            expires={150}
        >
          <div className="flex flex-wrap items-start mb-8 md:mb-0">
            <div className="flex-1 md:w-7/12 pl-0">
              <span className="text-center text-secondary-dark">Our website uses cookies to enhance your browsing experience...</span>
            </div>
            <div className="ml-auto">
              <Link to="/privacy-policy" className="btn btn--smaller btn--outline text-sm block -mt-1 ml-6 mr-2 md:mr-4">More Info<span className="hidden md:inline-block">rmation</span></Link>
            </div>
          </div>
        </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
