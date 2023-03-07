import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const TestimonialCard = ({ data }) => {
    const { review, reviewer, reviewerPhoto } = data
    return (
        <div className='bg-[#E1EEDD] rounded-lg p-6 mx-[14px] h-[320px]'>
            <div className='flex flex-col items-center'>
                <img src={reviewerPhoto} alt="" className='h-16 w-16 rounded-full object-cover' />
                <h1 className='mt-1 font-bold text-lg'>{reviewer}</h1>
                <span className='flex gap-1 text-sm text-[#9DC08B] mt-2'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                </span>
            </div>
            <p className='mt-4 text-center text-[#6096B4] leading-[24px]'>{review}</p>
        </div>
    )
}

export default TestimonialCard