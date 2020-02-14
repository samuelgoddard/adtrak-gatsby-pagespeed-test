import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { Link, navigateTo } from "gatsby"

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      enquiry: '',
      files: undefined,
      applyingFor: '',
      submitting: false
    };
  }

  componentWillMount() {
    this.setState({
      applyingFor: this.props.applyingFor
    })
    this.validator = new SimpleReactValidator();
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.setState({
        submitting: true
      })
      const form = e.target;
      fetch("/", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          "applying": this.props.applyingFor,
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleAttachment = e => this.setState({ [e.target.name]: e.target.files[0] });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, enquiry, files, applyingFor } = this.state;
    return (
      <form
        name="Application Form"
        className="block w-full max-w-3xl mx-auto overflow-hidden applicationform"
        data-netlify="true"
        method="post"
        action="/thank-you"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" className="hidden" name="form-name" value="contact" />
        <p hidden className="hidden"><label>Don’t fill this out:{" "}<input name="bot-field" /></label></p>
        
        <label htmlFor="applyingFor" className="block mb-3 md:mb-5">
          <span className="text-secondary-dark font-display pt-2 pb-1 block">Applying For:</span>
          <input type="text" name="applyingFor" id="applyingFor" className="block w-full p-4 border border-grey-medium outline-none focus:border-primary appearance-none" value={applyingFor} onChange={this.handleChange} />
        </label>

        <div className="flex flex-wrap md:-mx-6">
          <div className="w-full md:w-1/2 md:px-6">
            <label htmlFor="name" className="block mb-3 md:mb-5">
              <span className="text-secondary-dark font-display pt-2 pb-1 block">Name: *</span>
              <input type="text" name="name" id="name" className="block w-full p-4 border border-grey-medium outline-none focus:border-primary appearance-none" placeholder="Name" value={name} onChange={this.handleChange} />

              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('name', name, 'required')}
              </span>
            </label>

            <label htmlFor="phoneNumber" className="block mb-3 md:mb-5">
              <span className="text-secondary-dark font-display pt-2 pb-1 block">Phone Number: *</span>
              <input type="text" name="phone" id="phone" className="block w-full p-4 border border-grey-medium outline-none focus:border-primary appearance-none" placeholder="Phone Number" value={phone} onChange={this.handleChange} />

              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('phone number', phone, 'required|phone')}
              </span>
            </label>
          </div>

          <div className="w-full md:w-1/2 md:px-6">
            <label htmlFor="email" className="block mb-3 md:mb-5">
              <span className="text-secondary-dark font-display pt-2 pb-1 block">Email: *</span>
              <input type="email" name="email" id="email" className="block w-full p-4 border border-grey-medium outline-none focus:border-primary appearance-none" placeholder="Email" value={email} onChange={this.handleChange} />
                
              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('email', email, 'required|email')}
              </span>
            </label>

            <label htmlFor="attachment" className="block mb-3 md:mb-5">
              <span className="text-secondary-dark font-display pt-2 pb-1 block">Your CV:</span>

              <input type="file" name="attachment" id="attachment" className="block w-full p-4 border border-grey-medium outline-none focus:border-primary appearance-none" placeholder="Upload CV" accept="image/*,.pdf,.doc" value={files} onChange={this.handleAttachment} />
            </label>
          </div>
        </div>
        
        <div className="w-full">
          <label htmlFor="enquiry" className="block mb-4">
            <span className="text-secondary-dark font-display pt-2 pb-1 block">Cover Note: *</span>
            <textarea id="enquiry" name="enquiry" className="block w-full p-4 border border-grey-medium outline-none focus:border-primary appearance-none" rows="6" value={enquiry} onChange={this.handleChange} placeholder="Tell us about yourself..."></textarea>
            
            <span className="block mt-2 text-primary text-sm">
              {this.validator.message('cover note', enquiry, 'required')}
            </span>
          </label>

          <div className="mb-5 md:mb-8 text-center">
            <small className="text-grey-dark text-sm">By submitting your application you agree with our <Link to="/privacy-policy-for-job-applicants/" className="underline hover:text-secondary-dark focus:text-secondary-dark transition">privacy policy for job applicants</Link>.</small>
          </div>

          <div className="flex justify-center">
            <button type="submit" disabled={this.state.submitting} className="btn btn--primary">{ this.state.submitting ? 'Sending...' : 'Submit Application' }</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
