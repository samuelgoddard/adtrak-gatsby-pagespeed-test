import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      enquiry: "",
      submitting: false,
    };
  }

  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  handleSubmit = e => {
    if (this.validator.allValid()) {
      const form = e.target;
      this.setState({
        submitting: true
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { first, last, email, phone, company, website, enquiry } = this.state;
    return (
      <form
        name="Contact Form"
        onSubmit={this.handleSubmit}
        className="block w-full mx-auto max-w-md overflow-hidden contactform"
        method="post"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" className="hidden" name="form-name" value="contact" />
        <p hidden className="hidden"><label>Don’t fill this out:{" "}<input name="bot-field" /></label></p>

        <div className="flex flex-wrap md:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <label htmlFor="first" className="block mb-2">
              <span className="text-white font-display pt-2 pb-1 block">First Name: *</span>
              <input type="text" name="first" id="first" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" placeholder="First Name" value={first} onChange={this.handleChange} />

              <span className="block mt-2 text-secondary-light text-sm">
                {this.validator.message('first', first, 'required')}
              </span>
            </label>
          </div>
          <div className="w-full md:w-1/2 md:px-3">
            <label htmlFor="last" className="block mb-2">
              <span className="text-white font-display pt-2 pb-1 block">Last Name: *</span>
              <input type="text" name="last" id="last" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" placeholder="Last Name" value={last} onChange={this.handleChange} />

              <span className="block mt-2 text-secondary-light text-sm">
                {this.validator.message('last', last, 'required')}
              </span>
            </label>
          </div>
        </div>

        <label htmlFor="phoneNumber" className="block mb-2">
          <span className="text-white font-display pt-2 pb-1 block">Phone Number: *</span>
          <input type="text" name="phone" id="phone" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" placeholder="Phone Number" value={phone} onChange={this.handleChange} />

          <span className="block mt-2 text-secondary-light text-sm">
            {this.validator.message('phone', phone, 'required|phone')}
          </span>
        </label>

        <label htmlFor="email" className="block mb-2">
          <span className="text-white font-display pt-2 pb-1 block">Email: *</span>
          <input type="email" name="email" id="email" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" placeholder="Email" value={email} onChange={this.handleChange} />
            
          <span className="block mt-2 text-secondary-light text-sm">
            {this.validator.message('email', email, 'required|email')}
          </span>
        </label>

        <label htmlFor="company" className="block mb-2">
          <span className="text-white font-display pt-2 pb-1 block">Company: *</span>

          <input type="text" name="company" id="company" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" placeholder="Company" value={company} onChange={this.handleChange} />
            
          <span className="block mt-2 text-secondary-light text-sm">
            {this.validator.message('company', company, 'required|alpha')}
          </span>
        </label>

        <label htmlFor="website" className="block mb-2">
          <span className="text-white font-display pt-2 pb-1 block">Website URL: *</span>

          <input type="text" name="website" id="website" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" placeholder="https://example.co.uk" value={website} onChange={this.handleChange} />
            
          <span className="block mt-2 text-secondary-light text-sm">
            {this.validator.message('website', website, 'required')}
          </span>
        </label>

        <label htmlFor="enquiry" className="block mb-8">
          <span className="text-white font-display pt-2 pb-1 block">Enquiry: *</span>
          <textarea id="enquiry" name="enquiry" className="block w-full p-3 border-4 border-transparent focus:border-secondary-light outline-none appearance-none" rows="6" value={enquiry} onChange={this.handleChange} placeholder="How can we help..."></textarea>
          
          <span className="block mt-2 text-secondary-light text-sm">
            {this.validator.message('enquiry', enquiry, 'required')}
          </span>
        </label>

        <div className="flex justify-center">
          <button type="submit" disabled={this.state.submitting} className="btn btn--primary">{ this.state.submitting ? 'Sending...' : 'Submit Application' }</button>
        </div>
      </form>
    )
  }
}

export default Form
