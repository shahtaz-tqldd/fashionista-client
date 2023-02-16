import React, { useState } from 'react'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

const CartProductCard = ({ data }) => {
    const { image, name, price, qty } = data
    const [number, setNumber] = useState(qty)
    return (
        <div className='flex justify-between items-center py-2 px-3 shadow-lg bg-[#F8F4EA] rounded-lg my-2'>
            <div className='flex gap-5'>
                <img src={image} alt="" className='h-16' />
                <div>
                    <h2 className='font-bold text-lg'>{name}</h2>
                    <p className='mb-[5px]'>BDT {price}</p>
                    <div className='flex items-center gap-2'>
                        <button disabled={number===0} onClick={() => setNumber(number - 1)}>
                            <FiMinusCircle />
                        </button>
                        <p>{number}</p>
                        <button onClick={() => setNumber(number + 1)}>
                            <FiPlusCircle />
                        </button>
                    </div>
                </div>
            </div>

            <lord-icon
                src="https://cdn.lordicon.com/jmkrnisz.json"
                trigger="hover"
                colors="primary:#ee6d66"
                style={{ width: "25px", height: "25px", cursor: "pointer" }}>
            </lord-icon>
        </div>
    )
}

export default CartProductCard