import React from 'react'
import './ReadyMadeCurtains.css'
import Navbar from '../../Components/Navbar/Navbar'
import dimout1 from '../../assets/h2.jpg'
import dimout2 from '../../assets/h3.jpg'
import blackout1 from '../../assets/h4.jpg'

import Footer from '../../Components/Footer/Footer'
const ReadyMadeCurtains = () => {
    return (
        <div>
            <div className='Ready-made-curtains p-0 m-0'>
                <Navbar />
                <div className='ready-made-curtain-image p-0 m-0'>
                </div>
                <div className='custom-made-curtains-text'>
                    <h1 className='text fw-medium'>
                        READY MADE CURTAINS
                    </h1>
                </div>
                <div className="dim-out-curtains-text d-flex justify-content-between align-items-center">
                    <div className="dim-out-curtains-line"></div>
                    <div className="dim-out-curtains-heading">
                        <h1 className='text fw-light'>READY MADE SHEERS</h1>
                    </div>
                    <div className="dim-out-curtains-line"></div>
                </div>
                <div className=" dim-out-curtain-cards row d-flex justify-content-around align-content-center align-items-center">
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={dimout1} alt="" className='dimout-image-1' />
                        <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 000</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={dimout2} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 001</h6>
                    </div>
                </div>
                <div className="black-out-curtains-text d-flex justify-content-between align-items-center">
                    <div className="black-out-curtains-line"></div>
                    <div className="black-out-curtains-heading">
                        <h1 className='text fw-light'>READY MADE CURTAINS</h1>
                    </div>
                    <div className="black-out-curtains-line"></div>
                </div>
                <div className="row black-out-curtain-cards ">
                    <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                        <div className="col-md-3 card p-4 align-content-center align-items-center">
                            <img src={blackout1} alt="" className='dimout-image-1' />
                            <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                            <h6 className='text text-center'>item id : 003</h6>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ReadyMadeCurtains
