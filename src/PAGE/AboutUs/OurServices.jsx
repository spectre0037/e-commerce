import React from 'react'
import './OurServices.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const OurServices = () => {
    return (
        <div>
            <div className="our-services-navbar">
                <Navbar />
            </div>
            <div className="our-services-section-1">
                <h1 className='text'>OUR SERVICES</h1>
                <p>High-quality curtains, blinds, and shades.
                    Custom window treatments.
                    Free consultations and expert advice.
                    Affordable and stylish options.
                    Home and commercial solutions.
                    Professional installation services.
                    Wide selection of fabrics and styles.
                    Made-to-measure options available.
                    Exceptional customer service.
                    Satisfaction guaranteed.
                    Elegant and modern designs.
                    Energy-efficient window coverings.
                    Child-safe options available.
                    Pet-friendly solutions.
                    UV protection for your furniture.
                    Sound-dampening curtains.
                    Blackout curtains for bedrooms.
                    Sheer curtains for a light and airy feel.
                    Roman shades, roller shades, and more.
                    Motorized blinds for convenience.
                    Sustainable and eco-friendly options.
                    Easy to clean and maintain.
                    Durable and long-lasting materials.
                    Enhance your home decor.
                    Increase privacy and security.
                    Improve your home's energy efficiency.
                    Create a relaxing atmosphere.
                    Add a touch of luxury to your space.
                    Personalized service to meet your needs.
                    Transform your windows with style.
                    Durable and heavy-duty bus curtains.
                    Fire-resistant and flame-retardant fabrics.
                    UV-resistant and fade-resistant materials.
                    Easy to clean and maintain.
                    Custom sizes to fit any bus window.
                    Secure mounting options for safety.
                    Noise-reducing and sound-dampening.
                    Comfortable and privacy-enhancing.
                    Ideal for long-distance travel.
                    Protect passengers from glare and sun.
                    Improve passenger comfort and experience.
                    Stylish and professional appearance.
                    Made with high-quality commercial-grade materials.
                    Increase passenger safety and security.
                    Long-lasting and built to withstand wear and tear.</p>
            </div>
            <div className="our-services-pictures container-fluid border">
                <div className="container">
                    <div className="row d-flex justify-content-between align-content-center my-3">
                        <div className="col-md-3">
                            <div className="card card-1"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-2"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-3"></div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between align-content-center my-3">
                        <div className="col-md-3">
                            <div className="card card-4"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-5"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-6"></div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between align-content-center my-3">
                        <div className="col-md-3">
                            <div className="card card-7"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-8"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-9"></div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around align-content-center my-3">
                        <div className="col-md-3">
                            <div className="card card-10"></div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-11"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-services-footer">
                <Footer/>
            </div>
        </div>
    )
}

export default OurServices
