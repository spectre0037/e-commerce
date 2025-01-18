import React from 'react'
import './Footer.css'
import logo from '../../assets/WhatsApp_Image_2025-01-12_at_13.38.51_563d7940-removebg-preview.png'
const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer-block mt-5">
                <div className="row d-flex justify-content-around align-content-center align-items-center">
                    <div className="col-xl-4 ">
                        <h3 className=' text text-center'>CONTACT US</h3>
                        <div className='contact-us-text ps-3 mt-3'>
                            <p>AZ UTAMA RESOURCES</p>
                            <p>20A JALAN MEDAN 9 TAMAN MEDAN BARU 46000</p>
                            <p>PETALING JAYA SELANGOR</p>
                            <p>email : azutamaresources@gmail.com</p>
                            <p>contact : 017-2760912</p>
                        </div>
                    </div>
                    <div className="col-xl-2 ">
                        <h3 className='text text-center'>INFORMATION</h3>
                        <p className='text-center'>
                            <span>Curtains</span><hr className='p-0 m-1' />
                            <span>Blinds</span><hr className='p-0 m-1' />
                            <span>Wallpapers</span><hr className='p-0 m-1' />
                            <span>Beddings</span><hr className='p-0 m-1' />
                            <span>Accessories</span><hr className='p-0 m-1' />
                        </p>
                    </div>
                    <div className="col-xl-3 ">
                        <h3 className='text text-center'>CONNECT <br />WITH US</h3>
                        <p className='text-center'>
                            <span>Facebook : </span><span><a href="https://www.facebook.com/azutamacurtain?_rdc=1&_rdr#">visit page</a></span>
                        </p>
                    </div>
                    <div className="col-xl-2 d-flex flex-column justify-content-center">
                        <img className='p-0 m-0 footer-logo' src={logo} alt="" height={200}/>
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
