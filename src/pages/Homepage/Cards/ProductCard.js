import React from 'react'
import '../../../assets/styles/cart.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { addToDb } from '../../../assets/utilities/dbLocal'

const ProductCard = ({ data }) => {
    const { name, img, price, seller, ratingsCount, id } = data
    const navigate = useNavigate()

    const handleAddToCart = (e) => {
        e.preventDefault()
        addToDb(id)
    }

    const handleGoLink = () => {
        navigate(`/products/${id}`)
    }
    return (
        <div
            onClick={handleGoLink}
            className='rounded-lg cart-card hover:bg-white hover:shadow-lg cursor-pointer'
            data-aos="fade-up"
        >

            <div className='lg:h-64 h-40 w-full overflow-hidden rounded-t-lg'>
                <img src={img} alt="" className='h-full w-full object-cover rounded-t-lg productImg' />
            </div>

            <div className='h-32 flex flex-col justify-between p-4'>
                <div>
                    <span className='text-xs text-error'>{seller}</span>
                    <h2 className='text-lg leading-[20px]' style={{ textTransform: 'capitalize' }}>{name.toLowerCase()}</h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-sm '>BDT {price * 10}</h2>
                    <div className='flex items-center gap-2'>
                        <span className='flex gap-1 text-sm text-[#FFB84C]'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </span>
                        <span style={{ height: "4px", width: "4px", borderRadius: "50%", backgroundColor: "#888" }}></span>
                        <span>{ratingsCount}</span>
                    </div>
                </div>
            </div>

            <div
                className='flex gap-3 cart-btn'
            >
                <button
                    onClick={handleAddToCart}
                    className='w-[80%] btn hover:btn-error hover:text-white rounded-md normal-case text-white border-none'
                    style={{ zIndex: 10, backgroundColor: "#219f94" }}
                >
                    <lord-icon
                        target="button"
                        src="https://cdn.lordicon.com/hyhnpiza.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "25px", height: "25px" }}>
                    </lord-icon>
                    Add to Cart
                </button>
                <button
                    className='w-[20%] btn border-none flex justify-center items-center tooltip tooltip-warning'
                    style={{ backgroundColor: "#fff" }}>
                    <lord-icon
                        target="button"
                        src="https://cdn.lordicon.com/pnhskdva.json"
                        trigger="hover"
                        colors="primary:#ee6d66"
                        style={{ width: "30px", height: "30px" }}>
                    </lord-icon>
                </button>
            </div>
        </div>
    )
}

export default ProductCard