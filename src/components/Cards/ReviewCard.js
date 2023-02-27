import React from 'react'

const ReviewCard = ({ data }) => {
    const { review, reviewer, reviewerPhoto } = data
    return (
        <div className='lg:w-5/6 bg-white rounded-lg flex items-start gap-3 p-3 hover:shadow-lg'>
            <img src={reviewerPhoto} alt="" className='h-14 w-14 object-cover rounded-full' />
            <div>
                <h2 className='font-bold'>{reviewer}</h2>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default ReviewCard