import React from 'react'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import '../../../assets/styles/style.css'

const PromotionCard = ({ data }) => {
    const { name, off, bg } = data
    return (
        <div className="h-[560px]" style={{ backgroundImage: `url(${bg})`, backgroundSize:"cover" }}>
            <div className='flex justify-left items-center text-white px-32 py-4 gradientBg'>
                <div>
                    <p>Grass Coupon</p>
                    <h3 className='text-5xl font-bold'>{name}</h3>
                    <h1 className='text-xl mt-4 mb-12'>Last call for upto <span className='text-3xl font-bold'>{off}%</span> off!</h1>
                    <PrimaryButton>Buy Now</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default PromotionCard