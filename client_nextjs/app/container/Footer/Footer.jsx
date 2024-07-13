"use client"
import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, AppWrap2, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import Image from 'next/image';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = () => {
    setLoading(true);


    if (validateForm()) {
      const contact = {
        _type: 'contact',
        name,
        email,
        message,
      };


      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
          setFormSubmitError(false)
        })
        .catch((err) => {
          setLoading(false);
          setFormSubmitError(true)
          console.log(err)
        }

        );
    } else {
      setLoading(false);
    }
  };



  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Trim whitespace from input fields
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      errors.name = 'Name is required!';
      isValid = false;
    }

    if (!trimmedEmail) {
      errors.email = 'Email is required!';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      errors.email = 'Email address is invalid!';
      isValid = false;
    }

    if (!trimmedMessage) {
      errors.message = 'Message is required!';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };


  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">

        <div className="app__footer-card ">
          <Image src={images.email} alt="email" />
          <a href="mailto:rishusingh9369@gmail.com" className="p-text">rishusingh9369@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <Image src={images.mobile} alt="phone" />
          <a href="tel:+91 9695680505" className="p-text">+91 9695680505</a>
        </div>

      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">

          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>

          {formErrors.name && <p className="error-text">{formErrors.name}</p>}

          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>

          {formErrors.email && <p className={`error-text ${formErrors.email ? "show" : ""}`}>{formErrors.email}</p>}

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"

              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          {formErrors.message && <p className="error-text">{formErrors.message}</p>}

          <button type="button" disabled={loading} className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>

        </div>
      ) : (
        <div>
          <h3 className="head-text" >
            Thank you for getting in touch !
          </h3>
        </div>
      )}
      {
        formSubmitError && (
          <div>
            <h3 className="head-text" style={{ color: "red" }}>
              Error While Submitting Form !
            </h3>
          </div>
        )
      }

    </>
  );
};

export default AppWrap2(AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
));