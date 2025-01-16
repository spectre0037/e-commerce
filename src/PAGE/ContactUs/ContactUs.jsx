import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vw4hnrb', 'template_f8jop2m', form.current, 's7gzIzJoCQqtshaEx')
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Clear the form fields
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <div>
            <Navbar />
            <form
                className="form container-fluid d-flex justify-content-center align-items-center flex-column"
                ref={form}
                onSubmit={sendEmail}
            >
                <div className="w-50 bg-body-tertiary p-4 rounded-4 border d-flex justify-content-center flex-column">
                    <h1 className="text text-center">CONTACT US</h1>

                    <label htmlFor="from_name">Name</label>
                    <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        placeholder="Your name"
                        required
                    />

                    <label htmlFor="from_email">Email</label>
                    <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        placeholder="name@example.com"
                        required
                    />

                    <label htmlFor="from_contact">Contact Number</label>
                    <input
                        type="tel"
                        id="from_contact"
                        name="from_contact"
                        placeholder="Your contact number"
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                    ></textarea>

                    <input className="button mt-3" type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
