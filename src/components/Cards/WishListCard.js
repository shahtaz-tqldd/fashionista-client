import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import AddToCartButton from '../Buttons/AddToCartButton'
import '../../assets/styles/cart-add-btn.css'
import { removeFromWl } from '../../assets/utilities/wishList'
import { addToDb } from '../../assets/utilities/dbLocal'

const WishListCard = ({ data }) => {
    const { name, seller, price, img, ratingsCount, id } = data
    const handleAddToCart = () => {
        addToDb(id)
        removeFromWl(id)
    }
    const handleRemoveFromWl = () => {
        removeFromWl(id)
    }
    return (
        <div className='flex justify-between gap-5 p-[14px] rounded-lg bg-white cart-add-hover hover:shadow-lg'>
            <div className='w-1/3'>
                <img src={img} alt="" className='h-32 w-full object-cover rounded-lg' />
            </div>
            <div className='w-2/3 flex flex-col justify-between'>
                <div>
                    <span className='text-sm text-error'>{seller}</span>
                    <h1 className='text-lg font-bold capitalize leading-5'>{name.toLowerCase()}</h1>
                </div>
                <h2 className='text-xl'>BDT {price * 10}</h2>
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
            <div className='cart-add-btn hidden flex items-center'>
                <AddToCartButton handleAddToCart={handleAddToCart} />
                <button onClick={handleRemoveFromWl} className='btn border-none' style={{backgroundColor:"#F16767"}}>
                    <lord-icon
                        src="https://cdn.lordicon.com/jmkrnisz.json"
                        trigger="hover"
                        colors="primary:#fff"
                        style={{ width: "24px", height: "24px", cursor: "pointer" }}>
                    </lord-icon>
                </button>
            </div>
        </div>
    )
}

export default WishListCard