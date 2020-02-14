import React from "react"
import EmailSignature from "../components/emailSignature/emailSignature"

const EmailSigPage = () => {
  return (
    <>
      <div className="container mb-8">
        <h2>Email Signature Generator</h2>
        <p>Fill out your name, job title and phone number below then copy and paste directly into Google Mails signature settings.</p>
      </div>
      <EmailSignature />
    </>
  )
}

export default EmailSigPage