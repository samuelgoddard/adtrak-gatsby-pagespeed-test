import React from "react"
import SEO from "../components/seo"
import Link from "gatsby-link"

const NotFoundPage = ({ location }) => (
  <>
    <SEO
        titleOverride={"404: Page Not Found"}
        descriptionOverride={null}
        pathnameOverride={location.pathname}
      />
    
    <section className="mb-16 lg:mb-32">
      <div className="container">
        <div className="w-full md:w-2/3 text-center mx-auto mb-10 md:mb-16">
          <h1>Page Not Found</h1>
        </div>
      </div>
      <div className="container relative z-10">
        <div className="w-full md:w-8/12 xl:w-1/2 mx-auto">
          <div className="content">
            <p>Unfortunately this page does not exist...</p>
            <p>Feel free to navigate back to our <Link to="/" className="underline">home page</Link></p>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default NotFoundPage
