import React from 'react'
import useTitle from '../../hooks/useTitle'
import HotDeals from './HotDeals/HotDeals'
import Popular from './Popular/Popular'
import Promotions from './Promotions/Promotions'
import Subscribe from './Subscribe/Subscribe'
import Testimonial from './Testimonial/Testimonial'
import Hero from './Hero/Hero'
import Features from './Features/Features'

const Homepage = () => {
    useTitle('Home')
    return (
        <>
            <Hero/>
            <Features/>
            <HotDeals />
            <Promotions />
            <Popular />
            <Testimonial />
            <Subscribe />
        </>
    )
}

export default Homepage