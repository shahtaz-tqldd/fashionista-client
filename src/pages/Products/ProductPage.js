import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import AddToCartButton from '../../components/Buttons/AddToCartButton'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import ProductReview from './ProductReview'
import ProductCard from '../Homepage/Cards/ProductCard'
import useTitle from '../../hooks/useTitle'
import Subscribe from '../Homepage/Subscribe/Subscribe'

const ProductPage = () => {
    const product = useLoaderData()
    console.log(product)
    useTitle(product?.name)

    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const [clicked, setClicked] = useState(false)
    const [selectedTab, setSelectedTab] = useState(1)
    const [num, setNum] = useState(1)
    
    const [size, setSize] = useState(1)
    const sizes = [
        "M", "L", "XL", "2XL"
    ]

    const handleAddToCart = () => {
        const productDetails = {
            name: product?.name,
            number: num,
            size: sizes[size - 1]
        }
        console.log(productDetails)
    }

    if (product.length === 0) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <section className='flex lg:flex-row flex-col gap-12 pt-10'>

                {/* Product Image */}
                <div className='lg:w-1/2'>
                    <img src={product?.img} alt="" className='w-full' />
                </div>

                {/* Product Details */}
                <div className='lg:w-1/2'>
                    <span className='text-error'>{product?.seller}</span>
                    <h1 className='text-3xl font-bold'>{product?.name}</h1>
                    <h2 className='text-4xl mt-8'>BDT {product?.price * 10}</h2>

                    <div className='flex gap-12'>
                        {/* PICK A SIZE */}
                        <div>
                            <h2 className='mt-10 mb-2 text-md text-gradient font-bold'>Pick a Size</h2>
                            <div className="flex gap-3">
                                {
                                    sizes.map((item, index) => {
                                        return <span onClick={() => setSize(index + 1)}
                                            className={`hover:shadow-xl h-10 w-10 rounded-full flex items-center justify-center cursor-pointer ${size === index + 1 ? "bg-secondary text-white" : "bg-[#E1EEDD]"}`}>
                                            {item}
                                        </span>
                                    })
                                }
                            </div>
                        </div>

                        {/* CHOOSE COLOURS */}
                        <div>
                            <h2 className='mt-10 mb-2 text-md text-gradient font-bold'>Choose Color</h2>
                            <div className="flex gap-3">
                                <span className='h-6 w-6 bg-primary rounded-full'></span>
                                <span className='h-6 w-6 bg-[#222] rounded-full'></span>
                            </div>
                        </div>

                    </div>
                    {/* Add More Button */}
                    <div className='mt-8 flex items-center gap-3'>
                        <button className='btn btn-sm rounded-sm btn-error text-white' disabled={num === 1} onClick={() => setNum(num - 1)}><IoMdRemove /></button>
                        <h4>{num}</h4>
                        <button className='btn btn-sm rounded-sm btn-error text-white' onClick={() => setNum(num + 1)}><IoMdAdd /></button>
                    </div>

                    {/* Add to Cart */}
                    <div className='flex items-center gap-4 mt-4'>
                        <AddToCartButton handleAddToCart={handleAddToCart} />
                        <span
                            data-tip={!clicked ? "add to wishlist" : "remove from wishlist"}
                            onClick={() => setClicked(!clicked)}
                            className='bg-white p-[10px] rounded-md flex justify-center items-center cursor-pointer tooltip tooltip-success'>
                            <lord-icon
                                target="span"
                                src={!clicked ? "https://cdn.lordicon.com/pnhskdva.json" : "https://cdn.lordicon.com/xryjrepg.json"}
                                trigger="hover"
                                colors="primary:#ee6d66"
                                style={{ width: "30px", height: "30px" }}>
                            </lord-icon>
                        </span>
                    </div>

                    {/* Tabs */}
                    <div className="mt-10 tabs">
                        <span onClick={() => setSelectedTab(1)} className={`tab tab-bordered ${selectedTab === 1 && "tab-active text-error font-bold"}`}>Description</span>
                        <span onClick={() => setSelectedTab(2)} className={`tab tab-bordered ${selectedTab === 2 && "tab-active text-error font-bold"}`}>Specefication</span>
                        <span onClick={() => setSelectedTab(3)} className={`tab tab-bordered ${selectedTab === 3 && "tab-active text-error font-bold"}`}>Review (3)</span>
                    </div>

                    {/* Detail and Desctiption */}
                    <div className='mt-6'>

                        {/* Product Description */}
                        {selectedTab === 1 &&
                            <p className='text-justify'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        }

                        {/* Product Specefication */}
                        {selectedTab === 2 &&
                            <div class="overflow-x-auto">
                                <table class="table table-zebra w-full">
                                    <thead>
                                        <tr>
                                            <th>Seller</th>
                                            <th>{product?.seller}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Size</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>Black</td>
                                        </tr>
                                        <tr>
                                            <td>Category</td>
                                            <td>{product?.category}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }

                        {/* Product Review */}
                        {selectedTab === 3 && <p className='text-justify'>
                            <ProductReview />
                        </p>}
                    </div>
                </div>
            </section>

            {/* SIMILAR PRODUCTS */}
            <section className='my-32'>
                <h2 className='text-2xl font-bold text-gradient mb-8'>Similar Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                    {
                        products?.slice(0, 4)?.map((item, index) => <ProductCard key={index} data={item} />)
                    }
                </div>
            </section>
            
            {/* GET COUPON */}
            <Subscribe/>
        </div>
    )
}

export default ProductPage
