import React, { useEffect, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import ProductCard from '../Homepage/Cards/ProductCard'

const Products = () => {
    useTitle('Products')
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    let allCategory = []
    products?.map(p => !allCategory.includes(p.category) && allCategory.push(p.category))
    return (
        <div className='flex gap-5'>
            <aside className='lg:w-[25%] rounded-lg h-[400px] bg-white sticky top-20 py-4 px-2'>
                <ul className='flex flex-col gap-1'>
                    {allCategory.map(c => <button className='btn btn-ghost capitalize'>{c}</button>)}
                </ul>
            </aside>
            <section className='lg:w-[75%]'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        products?.map((item, index) => <ProductCard key={index} data={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Products