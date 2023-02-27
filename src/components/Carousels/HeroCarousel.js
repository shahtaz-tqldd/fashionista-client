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

        },
        {
            title: 'Full of Life',
            description: "Image oene is about your trecking cause you couldn't provide",
            button: 'Click Here',
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
                    <h1 className='text-5xl font-bold uppercase text-white'>{item.title}</h1>
                    <p className='mt-2 mb-8 text-lg w-3/4'>{item.description}</p>
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