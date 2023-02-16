import React from 'react'

const TshirtCard = ({ data }) => {
    const {image, name, bg} = data
    return (
        <div className='w-full flex justify-between items-center px-6 h-full rounded' style={{backgroundColor: `${bg}`}}>
            <div>
                <h2 className='font-bold text-xl'>{name}</h2>
                <div className='flex gap-2 text-xs'>
                    <span className='font-bold'>Size:</span>
                    <span>XL</span>
                    <span>L</span>
                    <span>M</span>
                </div>
            </div>
            <img className='h-[100px]' src={image} alt="" />
        </div>
    )
}

export default TshirtCard