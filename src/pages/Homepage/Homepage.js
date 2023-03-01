import React from 'react'
import HeroCarousel from '../../components/Carousels/HeroCarousel'
import useTitle from '../../hooks/useTitle'
import CategoryCard from './Cards/CategoryCard'
import CategorySlider from './Hero/CategorySlider'
import HotDeals from './HotDeals/HotDeals'
import Popular from './Popular/Popular'
import Promotions from './Promotions/Promotions'
import Subscribe from './Subscribe/Subscribe'
import Testimonial from './Testimonial/Testimonial'

const Homepage = () => {
    useTitle('Home')
    const category = [
        {
            "name": "Free Delivery",
            "image": "https://cdn.lordicon.com/iejknaed.json",
            "description": "Get Free Delivery to anywhere in the country",
        },
        {
            "name": "90 Days Return",
            "image": "https://cdn.lordicon.com/pimvysaa.json",
            "description": "Return your products within 90 Days",
        },
        {
            "name": "Secure Payment",
            "image": "https://cdn.lordicon.com/nrzqxhfu.json",
            "description": "Payment through Card or Bkash, Nogod",
        },
        {
            "name": "24/7 Support",
            "image": "https://cdn.lordicon.com/cllunfud.json",
            "description": "Shop and get support from our team anytime",
        },
    ]
    return (
        <div className=''>
            {/* Heading section */}
            <section className='flex lg:flex-row flex-col w-full gap-8'>
                <div className='lg:w-2/3'>
                    <HeroCarousel />
                </div>

                {/* products card */}
                <div className='lg:w-1/3 h-[480px]'>
                    <div className='mb-3'>
                        <span className='bg-gradient text-white text-xs px-6 py-[5px] rounded-full'>New Arival</span>
                    </div>
                    <CategorySlider />
                </div>
            </section>

            {/* Category section */}
            <section>
                <div className='grid lg:grid-cols-4 grid-cols-2 p-12'>
                    {category.map((item, index) => <CategoryCard key={index} data={item} />)}
                </div>
            </section>

            <HotDeals />
            <Promotions />
            <Popular />
            <Testimonial/>
            <Subscribe/>
        </div>
    )
}

export default Homepage