import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Buttons/PrimaryButton'

const NoItemsFound = ({where}) => {
    return (
        <div className='mt-24 flex flex-col items-center'>
            <div className='text-3xl mb-10'> You have no items in your {where}! </div>
            <Link to='/products' className='text-[#E96479] font-bold flex items-center gap-2 text-lg'>
                <PrimaryButton>Shop Now</PrimaryButton>
            </Link>
        </div>
    )
}

export default NoItemsFound