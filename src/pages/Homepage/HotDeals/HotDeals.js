import React, { useEffect, useState } from 'react'
import '../../../assets/styles/textstyles.css'
import ProductCard from '../Cards/ProductCard'

const HotDeals = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <section>
            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/tqywkdcz.json"
                        trigger="loop"
                        style={{ width: "60px", height: "60px" }}>
                    </lord-icon>
                    <h2 className='font-bold text-2xl text-gradient'>Hot Deals</h2>
                </div>
                <div>
                    <span className='mx-10'>Top 10</span>
                    <button className='btn btn-sm px-6 btn-primary rounded text-white normal-case'>See All</button>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-5'>
                {
                    products?.filter(p=>p.category === "Men's Sneaker").splice(4, 10).map((item, index)=><ProductCard key={index} data={item} />)
                }
            </div>

        </section>
    )
}

export default HotDeals