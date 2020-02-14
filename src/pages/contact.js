import React from "react"
import Form from "../components/form/form"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactPage = ({ location }) => {
  return (
    <>
      <SEO
        titleOverride={"Contact"}
        descriptionOverride={"We relish a challenge and are always excited to meet new clients. The strategies we develop help build brands and grow businesses."}
        pathnameOverride={location.pathname}
      />

      <section id="form">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12 content mb-12 lg:mb-0 lg:pl-12 xl:pl-24 pr-6 xl:pr-12 pt-0 lg:pt-24 xl:pt-32">
              <div className="mb-8 lg:mb-12">
                <div className="content content--reset">
                  <h1 className="h2">Get In Touch</h1>
                  <p>We’d love to help you generate leads online. Get in touch today and we can discuss the best digital solution for your business.</p>
                  
                  <p>You can contact the team by either giving us a call, dropping us an email or completing the quick form.</p>
                </div>
              </div>

              <a href="tel:0115 959 8900" className="block transition text-secondary-dark hover:text-primary focus:text-primary text-xl md:text-2xl mb-1 contactlink">
                <FontAwesomeIcon className="mr-3 inline-block text-primary " icon="phone-alt" />
                <span className="inline-block">0115 959 8900</span>
              </a>

              <a href="mailto:hello@adtrak.co.uk" className="block transition text-secondary-dark hover:text-primary focus:text-primary text-xl md:text-2xl contactlink">
                <FontAwesomeIcon className="mr-3 inline-block text-primary" icon="envelope" />
                <span className="inline-block">hello@adtrak.co.uk</span>
              </a>
            </div>
            
            <div className="w-full lg:w-1/2 ml-auto bg-secondary p-8 md:p-12 py-12 md:py-16 xl:py-24">
              <div className="flex flex-wrap items-center justify-center h-full">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="bg-primary p-12 xl:p-24">
                <span className="h3 block">Head Office</span>
                <div className="text-white text-xl mb-6">
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

                <a href="tel:01159598900" className="block text-white text-xl hover:text-secondary-dark focus:text-secondary-dark transition contactlink">0115 959 8900</a>
                <a href="mailto:hello@adtrak.co.uk" className="block text-white text-xl hover:text-secondary-dark focus:text-secondary-dark transition contactlink">hello@adtrak.co.uk</a>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <iframe
                title="Adtrak Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.7018457556137!2d-1.1564898841763211!3d52.953787679898646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c22aaa06ec43%3A0xec466c57bd5811ae!2sAdtrak!5e0!3m2!1sen!2suk!4v1578477962382!5m2!1sen!2suk"
                className="w-full h-64 lg:h-full"
                frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

// export const query = graphql`
//   query ContactPageQuery {
//   }
// `
