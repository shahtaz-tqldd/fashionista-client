import React, { useContext, useState } from 'react'
import ProductCard from '../../components/Cards/ProductCard'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'

const Products = () => {
    useTitle('Products')
    const { products=[] } = useContext(AuthContext)
    const [selectedProduct, setSelectedProduct] = useState(products)
    const [selectedBtn, setSelectedBtn] = useState(99)
    const handleProduct = (category, index) => {
        setSelectedBtn(index);
        if (category === "all") {
            setSelectedProduct(products);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const sortProducts = products.filter((p) => p.category === category);
            setSelectedProduct(sortProducts);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const allCategory = [...new Set(products?.map((p) => p.category))];

    return (
        <div className='flex lg:flex-row flex-col gap-5'>
            <div className='lg:w-[25%]'>
                <aside className='rounded-lg bg-white sticky lg:top-20 top-16 py-4 px-2 lg:mx-0 md:mx-0 -mx-4 shadow-lg' style={{ zIndex: "2" }}>
                    <ul className='flex lg:flex-col flex-row lg:overflow-hidden overflow-scroll gap-1'>
                        <button onClick={() => handleProduct("all", 99)} className={`btn capitalize ${selectedBtn !== 99 ? 'btn-ghost' : 'text-white'}`}>All Products</button>
                        {allCategory.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleProduct(category, index)}
                                className={`btn capitalize ${selectedBtn !== index ? "btn-ghost" : "text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </ul>
                </aside>
            </div>
            <section className='lg:w-[75%]'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5'>
                    {
                        selectedProduct?.map((item, index) => <ProductCard key={index} data={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Products