import React from 'react'
import FeaturesCard from '../../../components/Cards/FeaturesCard'
const features = [
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

const Features = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-4 grid-cols-2 lg:p-12 md:p-6 p-0 lg:mt-0 md:mt-0 mt-3'>
                {features.map((item, index) => <FeaturesCard key={index} data={item} />)}
            </div>
        </section>
    )
}

export default Features