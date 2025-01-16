import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Shop.css';
import Navbar from '../../Components/Navbar/Navbar';

const Shop = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vw4hnrb', 'template_ay9liav', form.current, 's7gzIzJoCQqtshaEx')
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
                <div className="form-control bg-body-tertiary p-4 rounded-4 d-flex justify-content-center flex-column">
                    <h1 className="text text-center">SHOP NOW</h1>

                    <label htmlFor="from_name">Name</label>
                    <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        placeholder="Your Name"
                        required
                    />

                    <label htmlFor="item_id">Item ID</label>
                    <input
                        type="text"
                        id="item_id"
                        name="item_id"
                        placeholder="xxxx"
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

                    <label htmlFor="Delivery_address">Delivery Address</label>
                    <input
                        type="text"
                        id="Delivery_address"
                        name="Delivery_address"
                        placeholder="Your delivery address"
                        required
                    />

                    <label htmlFor="Transaction_id">Transaction ID</label>
                    <input
                        type="text"
                        id="Transaction_id"
                        name="Transaction_id"
                        placeholder="Your transaction ID"
                        required
                    />

                    <input className="button mt-3" type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Shop;
