import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ThankYou = ({ location }) => {
  return (
    <>
      <SEO
        titleOverride={"Thank You"}
        pathnameOverride={location.pathname}
      />

      <section className="mb-16 lg:mb-32">
        <div className="container">
          <div className="w-full md:w-2/3 text-center mx-auto mb-10 md:mb-16">
            <h1>Thank you for your enquiry</h1>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="w-full md:w-8/12 xl:w-1/2 mx-auto">
            <div className="content">
              <p>Thank you very much for your enquiry, we will be in touch as soon as possible.</p>
              <p>In the meantime, feel free to navigate back to our <Link to="/" className="underline">home page</Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThankYou