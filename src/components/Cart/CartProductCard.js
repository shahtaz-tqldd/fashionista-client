import React, { useState } from 'react'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { removeFromDb } from '../../assets/utilities/dbLocal'

const CartProductCard = ({ data }) => {
    const { img, name, price, quantity, id } = data
    const [number, setNumber] = useState(quantity)
    const handleRemoveFromCart = () => {
        removeFromDb(id)
    }
    return (
        <div className='flex justify-between items-center py-2 px-3 shadow-lg bg-[#F8F4EA] rounded-lg my-2'>
            <div className='flex gap-5'>
                <img src={img} alt="" className='h-16' />
                <div>
                    <h2 className='font-bold text-lg'>{name}</h2>
                    <p className='mb-[5px]'>BDT {price * 10}</p>
                    <div className='flex items-center gap-2'>
                        <button disabled={number <= 1} onClick={() => setNumber(number - 1)}>
                            <FiMinusCircle className={number <= 1 ? 'text-[#aaa]':'text-[#EC7272]'}/>
                        </button>
                        <p>{number}</p>
                        <button onClick={() => setNumber(number + 1)}>
                            <FiPlusCircle className='text-[#219f94]'/>
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