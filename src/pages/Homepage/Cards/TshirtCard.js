import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/styles/style.css'

const TshirtCard = ({ data }) => {
    const { image, name, bg, price } = data
    return (
        <Link to='/products/13cbc7ed-a61b-4883-9d42-82d7d8642b86'>
            <div className='w-full flex justify-between items-center px-6 h-full rounded my-2 py-4 product' style={{ backgroundColor: `${bg}` }}>
                <div>
                    <h3 className='font-bold text-lg'>{name}</h3>
                    <div className='flex gap-2 text-xs'>
                        <span className='font-bold'>Size:</span>
                        <span>XL</span>
                        <span>L</span>
                        <span>M</span>
                    </div>
                    <h2 className='text-xl mt-2'>BDT {price}</h2>
                    
                </div>
                <img className='h-[100px] productImg' src={image} alt="" />
            </div>
        </Link>
    )
}

export default TshirtCard