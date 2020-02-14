import React from "react"

class EmailSignature extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Nigel French',
      title: 'Fictional Consultant',
      phone: '0115 959 XXXX',
      social: true
    }
    this.toggleSocial = this.toggleSocial.bind(this);
  }

  toggleSocial() {
    const currentState = this.state.social;
    this.setState({ social: !currentState });
  };

  handleChange = (e) =>{ 
    this.setState({
      [e.target.name]: e.target.value}
    );
  }

  render() {
    var emailTextStyle = {
      fontWeight: '400'
    };

    return (
      <div className="overflow-hidden">
        <div className="container mb-8">
          <div className="flex flex-wrap items-end lg:w-10/12 lg:-mx-5">
            <div className="w-full lg:w-1/4 lg:px-5">
              <label htmlFor="name" className="block mb-4 lg:mb-0">
                <span className="text-secondary-dark font-display pt-2 pb-1 block text-sm">Name:</span>
                <input type="text" name="name" id="name" className="block w-full p-4 border border-grey outline-none focus:border-primary appearance-none" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
              </label>
            </div>
            <div className="w-full lg:w-1/4 lg:px-5">
              <label htmlFor="title" className="block mb-4 lg:mb-0">
                <span className="text-secondary-dark font-display pt-2 pb-1 block text-sm">Job Title:</span>
                <input type="text" name="title" id="title" className="block w-full p-4 border border-grey outline-none focus:border-primary appearance-none" placeholder="Job Title" value={this.state.title} onChange={this.handleChange} />
              </label>
            </div>
            <div className="w-full lg:w-1/4 lg:px-5">
              <label htmlFor="phone" className="block mb-4 lg:mb-0">
                <span className="text-secondary-dark font-display pt-2 pb-1 block text-sm">Phone Number:</span>
                <input type="tel" name="phone" id="phone" className="block w-full p-4 border border-grey outline-none focus:border-primary appearance-none" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} />
              </label>
            </div>
            <div className="w-full lg:w-1/4 lg:px-5">
              <button className="btn btn--smaller btn--outline-grey" onClick={this.toggleSocial}>Toggle Social Links {this.state.social ? `Off` : `On`}</button>
            </div>
          </div>
        </div>

        <div className="container mb-24 outline-none border-none">
          <div className="border border-grey p-8 md:p-12 outline-none">
            <div className="max-w-4xl outline-none border-none">
              <div className="pb-3 outline-none border-none">
                <div className="outline-none border-none">
                  <span className="pb-px mb-0 font-email block font-bold antialiased outline-none border-none text-lg mb-0 font-normal">{this.state.name}</span>
                </div>
                <span className="text-sm block font-email text-primary font-light antialiased outline-none border-none" style={emailTextStyle}>{this.state.title}</span>
              </div>
              
              <div className="mb-15px outline-none border-none">
                <span className="inline-block font-email font-normal text-sm text-secondary-dark no-underline font-medium antialiased outline-none border-none mr-5px">{this.state.phone}</span>
                <span className="inline-block font-email max-w-2xl text-sm mt-px font-light antialiased outline-none border-none" style={emailTextStyle}><span className="text-primary inline-block ml-px mr-5px antialiased outline-none border-none">•</span> Contact our dedicated service desk advisors directly on: <span className="text-secondary-dark no-underline antialiased outline-none border-none">0115 852 6700</span></span>
              </div>

              <hr className="border-b border-grey mb-15px block outline-none"/>

              <div className="mb-15px outline-none border-none">
                <a href="https://adtrak.co.uk" className="inline-block mb-3 mr-5px outline-none border-none">
                  <img src="https://adtrak.co.uk/wp-content/themes/adtrak-parent/images/adtrak-logo.png" alt="Adtrak Logo" className="mr-5 inline-block align-middle outline-none border-none"></img>
                </a>

                <span className={this.state.social ? `antialiased text-xs font-light block font-email inline-block align-middle mr-30px outline-none border-none` : `antialiased text-xs font-light block font-email inline-block align-middle outline-none border-none` } style={emailTextStyle}>Level 3, Chapel Quarter,<br/>Maid Marian Way, Nottingham, NG1 6HQ</span>

                { this.state.social && (
                  <div className="inline-block outline-none border-none">
                    <a href="https://en-gb.facebook.com/adtrak" className="inline-block mr-15px align-middle outline-none border-none">
                      <img src="https://adtrak.co.uk/wp-content/themes/adtrak-parent/images/facebook.png" alt="Facebook" className="inline-block align-middle outline-none border-none"></img>
                    </a>
                    <a href="https://www.twitter.com/adtrak" className="inline-block mr-15px align-middle outline-none border-none">
                      <img src="https://adtrak.co.uk/wp-content/themes/adtrak-parent/images/twitter.png" alt="Twitter" className="inline-block align-middle outline-none border-none"></img>
                    </a>
                    <a href="https://www.linkedin.com/company/adtrak" className="inline-block mr-15px align-middle outline-none border-none">
                      <img src="https://adtrak.co.uk/wp-content/themes/adtrak-parent/images/linkedin.png" alt="LinkedIn" className="inline-block align-middle outline-none border-none"></img>
                    </a>
                    <a href="https://www.instagram.com/adtrak" className="inline-block mr-15px align-middle outline-none border-none">
                      <img src="https://adtrak.co.uk/wp-content/themes/adtrak-parent/images/insta.png" alt="Instagram" className="inline-block align-middle outline-none border-none"></img>
                    </a>
                  </div>
                )}
              </div>

              <span className="text-grey-dark text-xs block pb-6 font-email font-light block antialiased outline-none border-none" style={emailTextStyle}>Adtrak Media Ltd is a limited company registered in England and Wales<br/>Registered number: O3382296. Registered office: 1 Pinnacle Way, Pride Park, Derby, DE24 8ZS</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailSignature
