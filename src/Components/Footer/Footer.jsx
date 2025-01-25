import React from 'react'
import './Footer.css'
import logo from '../../assets/WhatsApp_Image_2025-01-12_at_13.38.51_563d7940-removebg-preview.png'
const Footer = () => {
    return (
        <div className='w-100 h-100'>
            <div className="container-fluid footer-block mt-5">
                <div className="row h-100 d-flex justify-content-around align-content-center align-items-center">
                    <div className="col-xl-4 ">
                        <h3 className=' text '>CONTACT US</h3>
                        <div className='contact-us-text ps-3 mt-3'>
                            <p>AZ UTAMA RESOURCES</p>
                            <p>20A JALAN MEDAN 9 TAMAN MEDAN BARU 46000</p>
                            <p>PETALING JAYA SELANGOR</p>
                            <p>email : azutamaresources@gmail.com</p>
                            <p>contact : 017-2760912, +60178130912</p>
                        </div>
                    </div>
                    <div className="col-xl-2 ">
                        <h3 className='text '>INFORMATION</h3>
                        <div className=''>
                            <p>CURTAINS</p>
                            <p>Blinds</p>
                            <p>Wallpapers</p>
                            <p>Bedding</p>
                        </div>
                    </div>
                    <div className="col-xl-4 ">
                        <h3 className='text'>CONNECT WITH US</h3>
                        <p className=''>Connect with us at our social media platforms  Facebook : <a href="https://www.facebook.com/azutamacurtain?_rdc=1&_rdr#">visit</a></p>
                    </div>
                    <div className="col-xl-2 d-flex flex-column justify-content-center">
                        <img className='p-0 m-0 footer-logo' src={logo} alt="" height={200} />
                        <p className='text-center m-0'>
                            2025 . all rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
