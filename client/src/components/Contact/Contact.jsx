import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Use @emailjs/browser instead of 'emailjs-com'
import './contact.css';

import ModaelCanvas from './PhoneCanvas/PhoneModel';

// Initialize emailjs with your user ID
emailjs.init('DkgEwFu3ZOlq2o45n');

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_v9tnhrm', 'template_17y17ot', {
        from_name: form.name,
        to_name: 'Jimmy Vela',
        from_email: form.email,
        to_email: 'jimmyvela06@gmail.xom',
        message: form.message,
      })
      .then(
        (response) => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <h4 className='section__contact'>Get in touch</h4>
      <div className='container grid'>
        <div className='contact__container'>
          <form ref={formRef} className='contact__form' onSubmit={sendEmail}>
            <h3 className='contact__formHeader'>Email</h3>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className='contact__form-input'
                placeholder='Insert your name'
              />
            </div>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Mail</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className='contact__form-input'
                placeholder='Insert your email'
              />
            </div>
            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Write Message</label>
              <textarea
                name='message'
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                cols='30'
                rows='10'
                className='contact__form-input'
                placeholder='Insert Text'
              ></textarea>
            </div>
            <button type='submit' className='sendBtn'>
              <span className='spanSend'>{loading ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
          <div className='phone__container'>
            <h3 className='contact__phoneHeader'>Phone</h3>

            <div className='modalCanvas'>
              <ModaelCanvas />
            </div>
            <button className='callBtn'>
              <a href='tel:9728347895'>
                <span className='spanCall callText'>CALL </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
