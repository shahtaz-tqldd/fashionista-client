import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/styles/textstyles.css'
import ProductCard from '../Cards/ProductCard'

const HotDeals = () => {
    const [hotDeals, setHotDeals] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/products/hotdeals')
            .then(res => res.json())
            .then(data => setHotDeals(data))
    }, [hotDeals])
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
                    <span className='mx-10'>Top 8</span>
                    <button className='btn btn-sm px-6 btn-primary rounded text-white normal-case'>See All</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                {
                    hotDeals?.map((item, index) => <ProductCard key={index} data={item} />)
                }
            </div>
            <div className='flex items-center justify-end mt-8'>
                <Link to="/" className='cursor-pointer flex items-center gap-2'>
                    <h2 className='text-[#0081B4] font-bold text-md hover:text-[#344D67]'>See More</h2>
                    <lord-icon
                        target="a"
                        src="https://cdn.lordicon.com/zmkotitn.json"
                        trigger="hover"
                        colors= "primary:#0081B4"
                        style={{ width: "18px", height: "18px" }}>
                    </lord-icon>
                </Link>
            </div>
        </section>
    )
}

export default HotDeals