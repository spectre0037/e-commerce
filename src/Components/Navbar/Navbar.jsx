import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/WhatsApp_Image_2025-01-12_at_13.38.51_563d7940-removebg-preview.png';
import cart from '../../assets/cart.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [activeContent, setActiveContent] = useState('MENU');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dropdownItems = [
        { label: 'CUSTOM MADE CURTAINS', link: '/curtains', items: ['New Arrival', 'Dim-Out Curtains', 'Sheer Curtains', 'Blackout Curtains'] },
        { label: 'READY MADE CURTAINS', link: '/ready-made-curtains', items: ['Ready Made Curtains', 'Ready Made Sheers'] },
        { label: 'BLINDS', link: '/blinds', items: ['Roller Blinds', 'Zebra Blinds'] },
        { label: 'WALLPAPER', link: '/wallpapers', items: ['Neue Bude 2.0 Collection', 'Mixture 2 Collection', 'Novita Collection'] },
        { label: 'BEDDING', link: '/bedding', items: ['Bedsheets', 'Pillows'] },
        { label: 'ACCESSORIES', link: '/accessories', items: [{ label: 'Tracks & Rod', subItems: ['Geminus Series (Railing)', 'Frankston Series (Railing)'] }] },
    ];

    return (
        <div className="navbar fixed-top">
            <div className="container logo d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <span className="offcanvas-btn mt-4 d-inline-block" onClick={handleShow}>
                        <div className="line mt-1"></div>
                        <div className="line2 mt-1"></div>
                        <div className="line3 mt-1"></div>
                    </span>
                    <img className='me-5' src={Logo} alt="logo" height={140} />
                </div>
                <div>
                    <Link to='/shop'>
                        <img src={cart} alt="cart" height={35} />
                    </Link>

                </div>
            </div>
            <div className="container nav-bar-links">
                {dropdownItems.map(({ label, link, items }) => (
                    <Dropdown key={label} className="drop-down-container d-inline">
                        <Dropdown.Toggle variant="" className="drop-down border-0 round-0 p-2">
                            <Link to={link} className="text-white text-decoration-none dropdown-link">
                                {label}
                            </Link>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="drop-down-menu">
                            {items.map((item, index) => (
                                <Dropdown.Item key={index}>{item.label || item}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ))}
                <div className="d-flex align-items-center">
                    <Link to="/" className="mx-2 nav-link">HOME</Link>
                    <Link to="/contact-us" className="mx-2 nav-link">CONTACT US</Link>
                    <Link to="/about-us" className="mx-2 nav-link">ABOUT US</Link>
                    <Link to='/shop'>
                        <img className="shopping-cart mx-2" src={cart} alt="cart" height={25} />
                    </Link>
                    <span className="text-white">MYR0.00</span>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className="offcanvas-header" closeButton>
                    <Offcanvas.Title>
                        <img src={Logo} alt="logo" height={200} />

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body p-0">
                    <div className="offcanvas-body-top d-flex justify-content-between p-0 m-0">
                        <div
                            className={`offcanvas-Menu w-50 m-0 ${activeContent === 'MENU' ? 'text' : 'text-white bg-secondary'}`}
                            onClick={() => setActiveContent('MENU')}
                        >
                            MENU
                        </div>
                        <div
                            className={`offcanvas-Categories w-50 m-0 ${activeContent === 'CATEGORIES' ? 'text' : 'text-white bg-secondary'}`}
                            onClick={() => setActiveContent('CATEGORIES')}
                        >
                            CATEGORIES
                        </div>
                    </div>
                    {activeContent === 'MENU' ? (
                        <div className="offcanvas-menu-content m-0 d-flex flex-column justify-content-center">
                            <Link to="/shop" className="text-decoration-none m-3 fs-5 text">SHOP NOW</Link>
                            <Link to="/about-us" className="text-decoration-none m-3 fs-5 text">ABOUT US</Link>
                            <Link to="/contact-us" className="text-decoration-none m-3 fs-5 text">CONTACT US</Link>
                        </div>
                    ) : (
                        <div className="offcanvas-Categories-content m-0 d-flex flex-column">
                            {dropdownItems.map(({ label, link }) => (
                                <Link key={label} to={link} className="offcanvas-text text-decoration-none mt-3 ms-2 fs-5 text">
                                    {label}
                                </Link>
                            ))}
                            <Link to="/contact-us" className="text-decoration-none mt-3 ms-2 fs-5 text">CONTACT US</Link>
                            <Link to="/" className="text-decoration-none mt-3 ms-2 fs-5 text">HOME</Link>
                            <Link to="/about-us" className="text-decoration-none mt-3 ms-2 fs-5 text">ABOUT US</Link>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Navbar;
