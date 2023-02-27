import React from 'react'
import '../../../assets/styles/cart.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
    const { name, img, price, seller, ratingsCount, id } = data
    return (
        <Link to={`/products/${id}`}>
            <div className='rounded-lg cart-card hover:bg-white hover:shadow-lg' data-aos="fade-up">
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

                <button className='btn btn-primary hover:btn-error hover:text-white rounded-md normal-case text-white cart-btn'>
                    <lord-icon
                        target="button"
                        src="https://cdn.lordicon.com/hyhnpiza.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "25px", height: "25px" }}>
                    </lord-icon>
                    Add to Cart
                </button>

                <div className='flex flex-col items-center gap-2 option'>
                    <span className='bg-white p-[5px] rounded flex justify-center items-center'>
                        <lord-icon
                            target="span"
                            src="https://cdn.lordicon.com/pnhskdva.json"
                            trigger="hover"
                            colors="primary:#ee6d66"
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </span>
                    <span className='bg-white p-[5px] rounded flex justify-center items-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/pmegrqxm.json"
                            trigger="hover"
                            colors="primary:#ee6d66"
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </span>
                    <span className='bg-white p-[5px] rounded flex justify-center items-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/dnmvmpfk.json"
                            trigger="hover"
                            colors="primary:#ee6d66"
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard