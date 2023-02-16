import React from 'react'
import HeroCarousel from '../../components/Carousels/HeroCarousel'
// import Products from '../Products/Products'
import CategoryCard from './Cards/CategoryCard'
import TshirtCard from './Cards/TshirtCard'
import HotDeals from './HotDeals/HotDeals'

const Homepage = () => {
    const content = [
        {
            "name": "Red t-shirt",
            "image": "https://freepngimg.com/thumb/tshirt/7-2-t-shirt-png-hd.png",
            "bg": "#F0997D",
        },
        {
            "name": "Green t-shirt",
            "image": "https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png",
            "bg": "#D7E9B9",
        },
        {
            "name": "Gray t-shirt",
            "image": "https://i0.wp.com/miamiepictees.net/wp-content/uploads/2016/04/preview_men_standard_front-1.png?fit=240%2C264&ssl=1",
            "bg": "#FFE7CC",
        },
    ]
    const category = [
        {
            "name": "Free Delivery",
            "image": "https://cdn.lordicon.com/uetqnvvg.json",
            "description": "Get Free Delivery to anywhere in the country",
        },
        {
            "name": "90 Days Return",
            "image": "https://cdn.lordicon.com/qhviklyi.json",
            "description": "Return your products within 90 Days",
        },
        {
            "name": "Secure Payment",
            "image": "https://cdn.lordicon.com/huwchbks.json",
            "description": "Your Payment through secure process and reliable",
        },
        {
            "name": "24/7 Support",
            "image": "https://cdn.lordicon.com/slkvcfos.json",
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
                <div className='flex flex-col lg:w-1/3 gap-5 justify-between h-[480px]'>
                    {
                        content.map((item, index) => <TshirtCard key={index} data={item} />)
                    }
                </div>
            </section>

            {/* Category section */}
            <section>
                <div className='flex justify-between p-12'>
                    {category.map((item, index) => <CategoryCard key={index} data={item} />)}
                </div>
            </section>

            <HotDeals />
        </div>
    )
}

export default Homepage