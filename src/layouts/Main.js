import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import cart from '../assets/images/cart.png'
import '../assets/styles/animation.css'
import Cart from '../components/Cart/Cart'

const Main = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const cartData = 3
    return (
        <section className='mx-auto max-w-[1200px]'>
            {/* Cart Menu */}
            {
                !cartOpen &&
                <div className='fixed right-4 top-[20%] cursor-pointer flex flex-col items-center' onClick={() => setCartOpen(!cartOpen)}>
                    <div className='animation'>
                        <img className='h-16' src={cart} alt="cart" />
                        <p className='relative z-10 bg-[#D61355] ml-9 -mt-6 text-white flex justify-center items-center rounded-full h-7 w-7'>{cartData}</p>
                    </div>
                </div>
            }
            <div className='transition duration-300'>
                <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
            </div>

            <Navbar />

            <div className='pt-20'>
                <Outlet />
            </div>
        </section>
    )
}

export default Main