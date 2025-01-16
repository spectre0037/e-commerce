import React from 'react'
import './LandingPage.css'
import Navbar from '../Navbar/Navbar'
import Carousel from '../Carousels/Carousel'
import Middle from '../Middle/Middle'
import OwlCarousel from '../Carousels/OwlCarousel'
import OurProducts from '../Body/OurProducts'
import Carousels from 'react-bootstrap/Carousel';
import img1 from '../../assets/ins fb.png'
import img2 from '../../assets/showroom-service.jpg'
import img3 from '../../assets/member-ship-compressed.jpg'
import facebook from '../../assets/facebook-logo.svg'
import instagram from '../../assets/instagram-logo6.svg'
import tiktok from '../../assets/tiktok-logo.svg'
import Footer from '../Footer/Footer'
const LandingPage = () => {
    return (
        <div>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='carousel'>
                <Carousel />
            </div>
            <div className="middle-section">
                <Middle />
            </div>
            <div className="categories d-flex justify-content-between align-items-center">
                <div className='category-line'></div>
                <h1>CATEGORIES</h1>
                <div className='category-line'></div>
            </div>
            <div className="owl-carousel">
                <OwlCarousel />
            </div>
            <div className="our-products d-flex justify-content-between align-items-center">
                <div className='our-products-line'></div>
                <h1>OUR PRODUCTS</h1>
                <div className='our-products-line'></div>
            </div>
            <div className="products">
                <OurProducts />
            </div>
            <div className="others d-flex justify-content-between align-items-center">
                <div className='our-products-line'></div>
                <h1 className='d'>OTHERS</h1>
                <div className='our-products-line'></div>
            </div>
            <div className='carousel-2'>
                <Carousels className='carousels-2' fade>
                    <Carousels.Item className='carousel-item d-flex justidy-content-around'>
                        <div className="carousel-content d-flex justify-content-between flex-column">
                            <h1 className='text'>LIKE US ON <br />OUR SOCIAL MEDIA</h1>
                            <div className=''>
                                <span className='facebook-logo'>
                                    <img src={facebook} alt="" height={70} />
                                    facebook
                                </span><br />
                                <span className='insta-logo'>
                                    <img src={instagram} alt="" height={70} />
                                    instagram
                                </span><br />
                                <span className='tiktok-logo'>
                                    <img src={tiktok} alt="" height={70} />
                                    tiktok
                                </span>
                            </div>
                        </div>
                        <div className='carousel-image' >
                            <img src={img1} height={380} />
                        </div>
                    </Carousels.Item>
                    <Carousels.Item className='carousel-item d-flex justidy-content-around'>
                        <div className="carousel-content d-flex flex-column">
                            <h1 className='text'>MEMBERSHIP</h1>
                            <p className='w-50'>
                                MK Curtain offers lifetime membership for individual & corporate. What are you waiting for? Let’s join our membership to get extra benefits.
                            </p>
                        </div>
                        <div className='carousel-image' >
                            <img src={img3} height={380} />
                        </div>
                    </Carousels.Item>
                    <Carousels.Item className='carousel-item d-flex justidy-content-around'>
                        <div className="carousel-content d-flex flex-column">
                            <h1 className='text'>FIND OUR NEAREST BRANCH</h1>
                            <p className="w-50">
                                Looking for our nearest branch or chat to us face to face? Let’s locate us now to find our nearest branches here!
                            </p>
                        </div>
                        <div className='carousel-image' >
                            <img src={img2} height={380} />
                        </div>
                    </Carousels.Item>
                </Carousels>
            </div>
            <div className="landing-page-footer">
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
