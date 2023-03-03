import React from 'react'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import '../../../assets/styles/style.css'

const PromotionCard = ({ data }) => {
    const { name, off, bg } = data

    return (
        <div className="promotion-card" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
            <div className='promotion-card-content gradientBg'>
                <p className="promotion-card-title">Grass Coupon</p>
                <h3 className='promotion-card-heading'>{name}</h3>
                <h1 className='promotion-card-subheading'>Last call for upto <span className='promotion-card-off'>{off}%</span> off!</h1>
                <PrimaryButton className="promotion-card-button">Buy Now</PrimaryButton>
            </div>
        </div>
    )
}

export default PromotionCard


