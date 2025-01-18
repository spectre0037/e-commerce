import React from 'react'
import './AboutUs.css'
import NAVBAR from '../../Components/Navbar/Navbar'
import FOOTER from '../../Components/Footer/Footer'
const AboutUs = () => {
    return (
        <>
            <NAVBAR />
            <div className="About-us-image-1">
            </div>
            <div className="life-style-for-everyone-section container-fluid d-flex  justify-content-center align-items-center">
                <div className="row container-fluid w-100 h-100 d-flex justify-content-around m-0 p-0">
                    <div className="col-lg-12 align-content-center m-0">
                        <h1 className='text fw-bold'>ABOUT US</h1>
                        <p className='mt-3'>
                            At AZ Curtains, we've been crafting beautiful window treatments since 2003. Our mission is to provide the highest quality curtains, blinds, and shades to transform your home. We believe that quality is not just a detail, it's the foundation of a truly exceptional product. This commitment to excellence sets us apart, ensuring your windows are adorned with stunning and long-lasting pieces. We offer a wide selection of styles and fabrics to suit any taste and budget, all crafted with meticulous attention to detail. Our expert team is dedicated to providing personalized guidance and exceptional customer service, making your window treatment journey a delightful experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className="our-profound-story container-fluid justify-content-center align-items-center">
                <div className="row container-fluid w-100 h-100 d-flex justify-content-around">
                    <div className="col-lg-12 d-flex align-items-center">
                        <div>
                            <h1 className='text fw-bold'>OUR CUSTOMERS</h1>
                            <p className='mt-3'>
                            Our commitment to quality and customer satisfaction has earned us the trust of esteemed clients such as New Hup Lee Coach Manufacturing Sdn Bhd, Universiti Malaysia Terengganu, Universiti Teknologi Malaysia, Tentera Darat, Sin Hock Leong Coach Works (SHLCOACH), and Truckquip Sdn. Bhd. These partnerships underscore our ability to deliver exceptional window treatment solutions for diverse needs and environments.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="about-us-footer">
                <FOOTER />
            </div>
        </>
    )
}

export default AboutUs
