import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


export default function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Contact Us</h1>
        <h4>Use the form below to contact us directly.</h4>
        <form className="contact__form" action="https://formsubmit.co/cafecolumbiallc@gmail.com" method="POST">
          <span className="contact__form-section contact__form-section--name">
            <label for="name">Name:</label><input type="text" name="name" /> 
          </span>
          <span className="contact__form-section">
            <label for="email">Email:</label><input type="email" name="email" />
            <label for="tel">Phone:</label><input type="tel" name="tel" /> 
          </span>
          <label for="text">Message:</label><textarea />
          <button type="submit" name="submit" className="contact__form__btn">Submit</button>
        </form>
        <h4>Or use one of the following methods:</h4><br/>
        <a href="mailto:cafecolumbiallc@gmail.com" className="contact__line"><p><EmailIcon className="contact__icon"/>Email: cafecolumbiallc@gmail.com</p></a>
        <a href="tel:+114106003788" className="contact__line"><p><PhoneIcon className="contact__icon"/>Phone number: 410-600-3788</p></a>
        <a href="tel:+17039753788" className="contact__line"><p><PhoneAndroidIcon className="contact__icon"/>Mobile number: 703-975-3788</p></a>
      </div>
    </>
    );
}
