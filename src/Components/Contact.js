import React from 'react';
import colorSharp from "../assets/img/color-sharp.png"
import {useState} from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState("");
 
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d58e75a7-238b-4316-b8d8-547e946f6564");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Message sent successfully!");  
      console.log("Success", res);
    }else {
      setMessage("Failed to send message. Please try again.");
    }
  };
return (
  <section className='contact' id='contact'>

<div className="contact-page-container">
<div className="contact-header">
<img className='background-image' src={colorSharp}/>

    <h1>Get in touch</h1>
    <p>Have a little something, something you wanna talk about?</p><p> Please feel free to get in touch anytime, whether for work or to just say Hi 🙋‍♂️</p>
  </div>
  <div className="contact-form-container">
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <div className="form-group button-center">
        <button type="submit">Send</button>
      </div>
    </form>
    {message && <div className="success-message">{message}</div>}

  </div>
 
</div>
</section>
);
}

export default ContactForm;
