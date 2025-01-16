import React from 'react'
import './Middle.css'
import measurement from '../../assets/Measurement-icon.png'
import wallet from '../../assets/wallet-icon.png'
import JAB from '../../assets/JAB-logo.png'
const Middle = () => {
    return (
        <div className="middle-section-container d-flex justify-content-center align-items-center">
            <div className="row container d-flex justify-content-around align-items-center">
                <div className="col-md-3 d-flex justify-content-around align-items-center">
                    <div>
                        <img src={measurement} className='sub-images' />
                    </div>
                    <div className='text'>
                        Free Onsite Measurement
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-around align-items-center">
                    <div>
                        <img src={wallet} className='sub-images' />
                    </div>
                    <div className='text'>
                        Aeon Installment & Easy Payment
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-around align-items-center">
                    <div>
                        <img src={JAB} className='sub-images' />
                    </div>
                    <div className='text'>
                        Top Quality Textile Creations
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle
