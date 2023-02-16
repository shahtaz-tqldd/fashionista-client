import React, { useEffect, useState } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import './HeroCarousel.css'

const HeroCarousel = () => {
    const [slideNumber, setSlideNumber] = useState(1)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (slideNumber === 3) {
                setSlideNumber(1)
            } else {
                setSlideNumber(slideNumber + 1)
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, [slideNumber]);
    const content = [
        {
            title: 'Comfort Fasion',
            description: "Image oene is about your trecking cause you couldn't provide",
            button: 'Click Here',
            image: "https://images.pngnice.com/download/2113/Excited-Girl-Holding-Shopping-Bag-Transparent-PNG.png",

        },
        {
            title: 'Elegant Styles',
            description: "Image oene is about your trecking cause you couldn't provide",
            button: 'Click Here',
            image: "https://www.seekpng.com/png/full/858-8584137_fashion-forward-episodes-offers-fashion.png",

        },
        {
            title: 'Royal Vibe',
            description: "Image oene is about your trecking cause you couldn't provide",
            button: 'Click Here',
            image: "https://aaatap.com/merchant/assets/img/shopping_model.png"

        }

    ]
    return (
        <div className='slider'>
            {content.map((item, index) => <div key={index} className={`slide ${slideNumber === (index + 1) && 'active'}`}>
                <div className='image' style={(slideNumber === 1 && { backgroundColor: "#CEEDC7" }) || (slideNumber === 2 && { backgroundColor: "#A8D1D1" }) || (slideNumber === 3 && { backgroundColor: "#FECD70" })}>
                    <img src={item.image} alt="" className='relative z-10' />
                </div>
                <div className='info'>
                    <h1 className='text-5xl font-bold uppercase text-white'>{item.title}</h1>
                    <p className='mt-2 mb-4 text-lg w-3/4'>{item.description}</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>
            )}
            <div className='navigation'>
                <div className={`navBtn ${slideNumber === 1 && 'active'}`} onClick={() => setSlideNumber(1)}></div>
                <div className={`navBtn ${slideNumber === 2 && 'active'}`} onClick={() => setSlideNumber(2)}></div>
                <div className={`navBtn ${slideNumber === 3 && 'active'}`} onClick={() => setSlideNumber(3)}></div>
            </div>
        </div>
    )
}

export default HeroCarousel