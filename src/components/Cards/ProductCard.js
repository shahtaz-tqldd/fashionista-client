import React from 'react'
import '../../assets/styles/cart.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data, setModalOpen }) => {
    const { name, img, price, seller, ratingsCount, id } = data
    const navigate = useNavigate()

    const handleGoLink = () => {
        navigate(`/products/${id}`)
        setTimeout(() => {
            setModalOpen(false)
        }, 700)
    }
    return (
        <div
            onClick={handleGoLink}
            className='rounded-lg cart-card hover:bg-white hover:shadow-lg hover:text-[#222] cursor-pointer'
            data-aos="fade-up"
        >
            <div className='lg:h-64 h-40 w-full overflow-hidden rounded-t-lg bg-[#eceff1]'>
                <img src={img} alt="" className='h-full w-full object-cover rounded-t-lg productImg' />
            </div>
            <div className='lg:h-32 md:h-32 h-[120px] flex flex-col justify-between lg:p-4 md:p-4 p-2'>
                <div>
                    <span className='text-xs text-error'>{seller}</span>
                    <h2 className='lg:text-lg md:text-lg text-sm leading-[20px]' style={{ textTransform: 'capitalize' }}>{name.toLowerCase()}</h2>
                </div>
                <div className='flex lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-0 gap-1 justify-between'>
                    <h2 className='font-bold text-sm '>BDT {price * 10}</h2>
                    <div className='flex items-center gap-2'>
                        <span className='flex lg:gap-1 md:gap-1 gap-[2px] lg:text-sm md:text-sm text-xs text-[#FFB84C]'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </span>
                        <span style={{ height: "4px", width: "4px", borderRadius: "50%", backgroundColor: "#888" }}></span>
                        <span className='lg:text-md md:text-md text-xs'>{ratingsCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard