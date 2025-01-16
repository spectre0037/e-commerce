import React from 'react'
import './AboutUs.css'
import NAVBAR from '../../Components/Navbar/Navbar'
import lifestyleforeveryone from '../../assets/lifestyleforeveryone.jpeg'
import ourprofoundstoryimage from '../../assets/ourprofundstoryimage.jpeg'
import FOOTER from '../../Components/Footer/Footer'
const AboutUs = () => {
    return (
        <>
            <NAVBAR />
            <div className="About-us-image-1">
            </div>
            <h1 className='text-center text position-absolute w-100'>AZ- CURTAINS</h1>
            <div className="life-style-for-everyone-section container-fluid d-flex  justify-content-center align-items-center">
                <div className="row container-fluid w-100 h-100 d-flex justify-content-around m-0 p-0">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center m-0">
                        <img src={lifestyleforeveryone} alt="" className='m-0 life-style-for-everyone-image' />
                    </div>
                    <div className="col-lg-6 align-content-center m-0">
                        <h1 className='text fw-light'>“Lifestyle For Everyone”</h1>
                        <p className='mt-3'>Datuk Wira Dato’ (Dr.) Calvin Khiu, the Founder & Chairman of MK Curtain Berhad has made MK Curtain to be the leading number 1 in Malaysia’s curtain industry with more than 60 outlets throughout the nation. MK Curtain creates a quality and contemporary lifestyle for everyone by providing one-stop service, selling and customizing curtains, blinds, wallpapers, cushions, carpets and other home accessories.</p>
                    </div>
                </div>
            </div>
            <div className="our-profound-story container-fluid justify-content-center align-items-center">
                <div className="row container-fluid w-100 h-100 d-flex justify-content-around">
                    <div className="col-xl-7 d-flex align-items-center">
                        <div>
                            <h1 className='text fw-light'>Our Profound Story</h1>
                            <p className='mt-3'>MK represents the first letters of the surnames of Datuk Wira Dato’ (Dr.) Calvin Khiu and his wife, Datin Wira Moon. Datuk Wira Dato' (Dr.) Calvin Khiu started his curtain business under the company, CK Textile, with liabilities in the year 2005. MK Curtain was named after he was married with Datin Wira Moon and he received unconditional love and support from his wife since he decided to build his career in the curtain industry.


                                This loving couple runs the business together with their hearts and souls. The company logo of two swans facing each other, forming a heart shape. The bigger swan represents Datuk Wira Dato' (Dr.) Calvin Khiu and the smaller swan with crown represents Datin Wira Moon, symbolizes their love relationship and life commitment for one and another. Their passions, dedications and commitments have made them where they are today and their vision is to make MK Curtain an international brand.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 d-flex justify-content-center align-items-center">
                        <img src={ourprofoundstoryimage} alt="" className='our-profound-story-image' />
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
