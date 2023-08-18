import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Pages.css'
export const Page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_whvg4co', 'template_lch0v1n', form.current, 'dL6XFP12YGtbSkywl')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };


  return ( <div className='Pages'>
  <div className="container Rohit mt-5 mb-5">
  <h2 className="mb-4">Contact Us</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" >Send</button>
    </form>
    </div>
    </div>
    
   
  )
}

export default Page
