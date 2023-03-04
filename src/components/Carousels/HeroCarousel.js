import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Buttons/PrimaryButton'
import './HeroCarousel.css'

const HeroCarousel = () => {
    const [slideNumber, setSlideNumber] = useState(1)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (slideNumber === 4) {
                setSlideNumber(1)
            } else {
                setSlideNumber(slideNumber + 1)
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, [slideNumber]);
    const content = [
        {
            title: 'Elegant Styles',
            description: "We are offering the Fashion That Fits You Best. Grab Now!",
            image: "https://www.seekpng.com/png/full/858-8584137_fashion-forward-episodes-offers-fashion.png",
            
        },
        {
            title: 'Comfort Fasion',
            description: "Elevate Your Style with our brand new products, Purchase Today!",
            image: "https://images.pngnice.com/download/2113/Excited-Girl-Holding-Shopping-Bag-Transparent-PNG.png",

        },
        {
            title: 'Royal Vibe',
            description: "You one stop place to Shop with Confidence. Shopping is Easy!",
            image: "https://aaatap.com/merchant/assets/img/shopping_model.png"

        },
        {
            title: 'Stylish Look',
            description: "Remarks the landmark of Always On Trend courtesy, Hurry Up!",
            image: "https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Picture.png"

        }

    ]
    return (
        <div className='slider'>
            {content.map((item, index) => <div key={index} className={`slide ${slideNumber === (index + 1) && 'active'}`}>
                <div className='image'
                    style={
                        (slideNumber === 1 && { backgroundColor: "#B1D7B4" }) ||
                        (slideNumber === 2 && { backgroundColor: "#A8D1D1" }) ||
                        (slideNumber === 3 && { backgroundColor: "#FECD70" }) ||
                        (slideNumber === 4 && { backgroundColor: "#D6E4E5" })
                    }>
                    <img src={item.image} alt="" className='relative z-10' />
                </div>
                <div className='info'>
                    <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold uppercase text-white'>{item.title}</h1>
                    <p className='mt-2 lg:mb-8 md:mb-8 mb-5 lg:text-lg md:text-lg text-sm lg:w-3/4 md:w-3/4'>{item.description}</p>
                    <Link to='/products'><PrimaryButton>Shop Now</PrimaryButton></Link>
                </div>

            </div>
            )}
            <div className='navigation'>
                <div className={`navBtn ${slideNumber === 1 && 'active'}`} onClick={() => setSlideNumber(1)}></div>
                <div className={`navBtn ${slideNumber === 2 && 'active'}`} onClick={() => setSlideNumber(2)}></div>
                <div className={`navBtn ${slideNumber === 3 && 'active'}`} onClick={() => setSlideNumber(3)}></div>
                <div className={`navBtn ${slideNumber === 4 && 'active'}`} onClick={() => setSlideNumber(4)}></div>
            </div>
        </div>
    )
}

export default HeroCarousel