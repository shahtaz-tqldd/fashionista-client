import React from 'react'
import PromotionSlider from '../../../components/Slider/PromotionSlider'

const Promotions = () => {
  return (
    <section className='my-16'>
      <div className='flex items-center mb-8'>
        <lord-icon
          src="https://cdn.lordicon.com/clcopglh.json"
          trigger="loop"
          style={{ width: "60px", height: "60px" }}>
        </lord-icon>
        <h2 className='font-bold text-2xl textGradient'>Promotions</h2>
      </div>
      <PromotionSlider />
    </section>
  )
}

export default Promotions