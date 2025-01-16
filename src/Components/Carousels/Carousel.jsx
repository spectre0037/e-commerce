import React from 'react'
import './Carousel.css'
import Carousels from 'react-bootstrap/Carousel';
import img1 from '../../assets/carousel-1.jpg'
import img2 from '../../assets/carousel-2.jpg'
import img3 from '../../assets/carousel-3.jpg'
import img4 from '../../assets/carousel-4.jpg'
import img5 from '../../assets/carousel-5.jpg'
import img6 from '../../assets/carousel-6.jpg'
const Carousel = () => {
    return (
        <div>
            <Carousels className='carousels'>
                <Carousels.Item>
                    <img src={img1} className='image' />
                </Carousels.Item>
                <Carousels.Item>
                    <img src={img2} className='image' />
                </Carousels.Item>
                <Carousels.Item>
                    <img src={img3} className='image' />
                </Carousels.Item>
                <Carousels.Item>
                    <img src={img4} className='image' />
                </Carousels.Item>
            </Carousels>
        </div>
    )
}

export default Carousel
