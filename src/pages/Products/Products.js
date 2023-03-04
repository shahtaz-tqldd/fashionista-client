import React, { useContext} from 'react'
import ProductCard from '../../components/Cards/ProductCard'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'

const Products = () => {
    useTitle('Products')
    const {products} = useContext(AuthContext)

    let allCategory = []
    products?.map(p => !allCategory.includes(p.category) && allCategory.push(p.category))
    return (
        <div className='flex lg:flex-row flex-col gap-5'>
            <aside className='lg:w-[25%] rounded-lg lg:h-[400px] bg-white sticky lg:top-20 top-16 py-4 px-2 lg:mx-0 md:mx-0 -mx-4' style={{zIndex:"2"}}>
                <ul className='flex lg:flex-col flex-row lg:overflow-hidden overflow-scroll gap-1'>
                    {allCategory.map(c => <button className='btn btn-ghost capitalize'>{c}</button>)}
                </ul>
            </aside>
            <section className='lg:w-[75%]'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5'>
                    {
                        products?.map((item, index) => <ProductCard key={index} data={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Products