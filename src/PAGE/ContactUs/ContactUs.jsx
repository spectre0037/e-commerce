import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zrwxrlc', 'template_57p3fmp', form.current, {
                publicKey: 'EGs920113ObrXOfvo',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Clear the form fields
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
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
                <div className="form-control bg-body-tertiary p-4 rounded-4 border d-flex justify-content-center flex-column">
                    <h1 className="text text-center">CONTACT US</h1>
                    <label>Name</label>
                    <input type="text" name="from_name" placeholder="name" />
                    <label>Email</label>
                    <input type="email" name="from_email" placeholder="name@example.com" />
                    <label>Contact Number</label>
                    <input type="contact" name="from_contact" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className="button" type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
