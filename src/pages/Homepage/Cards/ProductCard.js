import React from 'react'

const ProductCard = ({ data }) => {
    const { name, img, price } = data
    return (
        <div className='hover:bg-white hover:shadow-lg rounded-lg'>
            <img src={img} alt="" className='h-44 w-full object-cover rounded-t-lg' />
            <div className='h-20 flex flex-col justify-between p-4'>
                <h2 className='text-sm' style={{textTransform:'capitalize'}}>{name.toLowerCase()}</h2>
                <h2 className='font-bold text-sm '>BDT {price * 10}</h2>
            </div>
        </div>
    )
}

export default ProductCard