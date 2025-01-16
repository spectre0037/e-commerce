import React from 'react'
import './Curtains.css'
import Navbar from '../../Components/Navbar/Navbar'
import dimout1 from '../../assets/h2.jpg'
import dimout2 from '../../assets/h3.jpg'
import blackout1 from '../../assets/h4.jpg'
import blackout2 from '../../assets/h5.jpg'
import blackout3 from '../../assets/h6.jpg'
import blackout4 from '../../assets/h7.jpg'
import blackout5 from '../../assets/h8.jpg'
import blackout6 from '../../assets/h9.jpg'
import blackout7 from '../../assets/h10.jpg'
import blackout8 from '../../assets/h11.jpg'
import blackout9 from '../../assets/h13.jpg'
import sheer1 from '../../assets/h16.jpg'
import sheer2 from '../../assets/h17.jpg'
import sheer3 from '../../assets/h22.jpg'
import Footer from '../../Components/Footer/Footer'
const Curtains = () => {
    return (
        <div className='p-0 m-0'>
            <Navbar />
            <div className='cutom-mades-curtain-image p-0 m-0'>
            </div>
            <div className='custom-made-curtains-text'>
                <h1 className='text fw-medium'>
                    CUSTOM MADE CURTAINS
                </h1>
            </div>
            <div className="dim-out-curtains-text d-flex justify-content-between align-items-center">
                <div className="dim-out-curtains-line"></div>
                <div className="dim-out-curtains-heading">
                    <h1 className='text fw-light'>DIM - OUT CURTAINS</h1>
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
                    <h1 className='text fw-light'>BLACK - OUT CURTAINS</h1>
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
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout2} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 004</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout3} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 005</h6>
                    </div>
                </div>
            </div>
            <div className=" black-out-curtain-cards row-2 ">
                <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout4} alt="" className='dimout-image-1' />
                        <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 003</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout5} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 004</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout6} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 005</h6>
                    </div>
                </div>
            </div>
            <div className="black-out-curtain-cards row-3 ">
                <div className="row m-0 p-0 black-out-cards-row-1 d-flex justify-content-around align-content-center align-items-center">
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout7} alt="" className='dimout-image-1' />
                        <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 003</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout8} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 004</h6>
                    </div>
                    <div className="col-md-3 card p-4 align-content-center align-items-center">
                        <img src={blackout9} alt="" className='dimout-image-2' />
                        <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                        <h6 className='text text-center'>item id : 005</h6>
                    </div>
                </div>
            </div>
            <div className="sheer-curtains-text d-flex justify-content-between align-content-center align-items-center">
                <div className="sheer-curtains-line"></div>
                <div className="sheer-curtains-heading">
                    <h1 className='text fw-light'>SHEER CURTAINS</h1>
                </div>
                <div className="sheer-curtains-line"></div>
            </div>
            <div className="row sheer-curtain-cards d-flex justify-content-around align-content-center align-items-center">
                <div className="col-md-3 card p-4 align-content-center align-items-center">
                    <img src={sheer1} alt="" className='dimout-image-1' />
                    <h4 className='text-center text-secondary'>M Betty French Pleat Custom Made Curtains</h4>
                    <h6 className='text text-center'>item id : 000</h6>
                </div>
                <div className="col-md-3 card p-4 align-content-center align-items-center">
                    <img src={sheer2} alt="" className='dimout-image-1' />
                    <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                    <h6 className='text text-center'>item id : 001</h6>
                </div>
                <div className="col-md-3 card p-4 align-content-center align-items-center">
                    <img src={sheer3} alt="" className='dimout-image-1' />
                    <h4 className='text-center text-secondary'>M La Apoma French Pleat Custom Made Curtains</h4>
                    <h6 className='text text-center'>item id : 001</h6>
                </div>
            </div>
            <div className="custom-made-footer">
                <Footer />
            </div>
        </div>
    )
}

export default Curtains
