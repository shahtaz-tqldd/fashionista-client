import React from 'react'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { addToDb, removeFromDb, removeOneFromDb } from '../../assets/utilities/dbLocal'

const CartProductCard = ({ data }) => {
    const { img, name, price, quantity, id } = data
    const handleRemoveFromCart = () => {
        removeFromDb(id)
    }
    const handleAddOneMore = () => {
        addToDb(id)
    }

    const handleRemoveOne = () => {
        removeOneFromDb(id)
    }
    return (
        <div className='flex justify-between items-center py-2 px-3 shadow-lg bg-[#F8F4EA] rounded-lg my-2'>
            <div className='flex gap-5'>
                <img src={img} alt="" className='h-16' />
                <div>
                    <h2 className='font-bold lg:text-md text-sm capitalize lg:leading-5 leading-4'>{name.toLowerCase()}</h2>
                    <p className='my-[5px]'>BDT {price * 10}</p>
                    <div className='flex items-center gap-2'>
                        <button disabled={quantity <= 1} onClick={handleRemoveOne}>
                            <FiMinusCircle className={quantity <= 1 ? 'text-[#aaa]' : 'text-colorRed'} />
                        </button>
                        <p>{quantity}</p>
                        <button onClick={handleAddOneMore}>
                            <FiPlusCircle className='text-[#219f94]' />
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={handleRemoveFromCart} className='h-6 w-6'>
                <lord-icon
                    src="https://cdn.lordicon.com/jmkrnisz.json"
                    trigger="hover"
                    colors="primary:#ee6d66"
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}>
                </lord-icon>
            </button>
        </div>
    )
}

export default CartProductCard