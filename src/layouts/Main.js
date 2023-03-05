import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import cartImg from '../assets/images/cart.png'
import '../assets/styles/animation.css'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/Buttons/ScrollToTop'
import { AuthContext } from '../context/AuthProvider'

const Main = () => {
    const { cartLength, cartOpen, setCartOpen } = useContext(AuthContext)
    return (
        <section className='mx-auto max-w-[1264px] px-4'>
            {/* Cart Menu */}
            {
                !cartOpen &&
                <div className='fixed right-4 top-[20%] cursor-pointer lg:flex md:flex hidden' onClick={() => setCartOpen(!cartOpen)} style={{ zIndex: "10" }}>
                    <div className='animation'>
                        <img className='h-16' src={cartImg} alt="cart" />
                        <p className='relative z-10 bg-[#D61355] ml-9 -mt-6 text-white flex justify-center items-center rounded-full h-7 w-7'>{cartLength}</p>
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