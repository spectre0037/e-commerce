import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Shop.css';
import Navbar from '../../Components/Navbar/Navbar';

const Shop = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vw4hnrb', 'template_ay9liav', form.current, {
                publicKey: 's7gzIzJoCQqtshaEx',
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
                <div className=" form-contorll bg-body-tertiary p-4 rounded-4 d-flex justify-content-center flex-column">
                    <h1 className="text text-center">SHOP NOW</h1>
                    <label>Name</label>
                    <input type="text" name="from_name" placeholder="Name" />
                    <label>Item id</label>
                    <input type="text" name="item_id" placeholder="xxxx" />
                    <label>Email</label>
                    <input type="email" name="from_email" placeholder="name@example.com" />
                    <label>Contact Number</label>
                    <input type="contact" name="from_contact" />
                    <label>Delivery Address</label>
                    <input name="Delivery_address" />
                    <label>Transaction Id</label>
                    <input name="Transaction_id" />
                    <input className="button" type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Shop;
