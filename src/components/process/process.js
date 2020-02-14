import React, { Fragment } from "react"
import { Link } from "gatsby"
import Triangle from "../triangle/triangle"

class Process extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      processes: 
        [{
          heading: "Understand",
          blurb: "Our starting point is you. We spend time getting to know your business, its challenges and your goals.",
        },{
          heading: "Plan",
          blurb: "We listen, then we create. We explore different approaches, techniques and strategies based on your needs."
        },{
          heading: "Deliver",
          blurb: "Our experts work collaboratively to build a complete and effective web design and digital marketing solution."
        },{
          heading: "Evaluate",
          blurb: "We prioritise measurable results and will report, analyse, test, assess, tweak and develop continuously."
      }],
    };
  }

  render() {
    return (
      <section className="bg-secondary-dark py-12 md:py-24 md:pb-16 lg:py-32 lg:pb-24">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center text-center mb-8 md:mb-16 lg:mb-20">
            {this.state.processes.map((process, index) =>
              <Fragment key={index}>
                <div className="w-full md:w-1/2 lg:flex-1 mb-8 md:mb-12 lg:mb-0">
                  <span className="h3 block text-white mt-0 pt-0">{process.heading}</span>
                  <p className="text-white text-lg md:px-12">{ process.blurb }</p>
                </div>
                
                { index !== 3 &&(
                  <Fragment>
                    <div className="hidden lg:block">
                      <span className="text-primary">
                        <Triangle />
                      </span>
                    </div>
                    <div className="block md:hidden mb-8">
                      <span className="text-primary">
                        <Triangle position={`down`} />
                      </span> 
                    </div>
                  </Fragment>                  
                )}
              </Fragment>
            )}
          </div>

          <p className="text-white font-display text-center h3 mb-0 pb-0 align-middle">Get in touch today on <a href="tel:01159598900" className="text-primary hover:text-primary-dark focus:text-primary-dark transition inline-block break-all contactlink">0115 959 8900</a> or <span className="ml-2 align-middle"><Link to="/contact/" className="btn btn--primary text-base">Contact Us</Link></span></p>
        </div>
      </section>
    );
  }
}

export default Process