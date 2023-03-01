import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import cart from '../assets/images/cart.png'
import '../assets/styles/animation.css'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/Buttons/ScrollToTop'

const Main = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const cartData = localStorage.getItem('cart-items')
    const [numberProduct, setNumberProduct] = useState(cartData)
    useEffect(()=>{
        const cart = localStorage.getItem('cart-items')
        setNumberProduct(cart)
    },[cartData])
 
    return (
        <section className='mx-auto max-w-[1264px] px-8'>
            {/* Cart Menu */}
            {
                !cartOpen &&
                <div className='fixed right-4 top-[20%] cursor-pointer flex flex-col items-center' onClick={() => setCartOpen(!cartOpen)} style={{ zIndex: "10" }}>
                    <div className='animation'>
                        <img className='h-16' src={cart} alt="cart" />
                        <p className='relative z-10 bg-[#D61355] ml-9 -mt-6 text-white flex justify-center items-center rounded-full h-7 w-7'>{numberProduct}</p>
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
            <ScrollToTop />
            <Footer />
        </section>
    )
}

export default Main