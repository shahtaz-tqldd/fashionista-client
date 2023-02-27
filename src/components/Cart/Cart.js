import React from 'react'
import '../../assets/styles/cart.css'
import CartProductCard from './CartProductCard'

const Cart = ({ setCartOpen, cartOpen }) => {
    const cartData = [
        {

            name: "Tshirt",
            image: "https://freepngimg.com/thumb/tshirt/7-2-t-shirt-png-hd.png",
            price: 200,
            qty: 1
        },
        {

            name: "Tshirt",
            image: "https://www.pngarts.com/files/5/Plain-Pink-T-Shirt-Transparent-Image.png",
            price: 249,
            qty: 1
        },
        {

            name: "Tshirt",
            image: "https://i0.wp.com/miamiepictees.net/wp-content/uploads/2016/04/preview_men_standard_front-1.png?fit=240%2C264&ssl=1",
            price: 400,
            qty: 2
        },
        {

            name: "Tshirt",
            image: "https://i0.wp.com/miamiepictees.net/wp-content/uploads/2016/04/preview_men_standard_front-1.png?fit=240%2C264&ssl=1",
            price: 400,
            qty: 2
        },

    ]

    let subtotal = 0;
    cartData.map(item => {
        return subtotal = subtotal + (item.price * item.qty)
    })
    const total = subtotal
    return (
        <section className={`cart top-0 z-50 h-[100vh] bg-[#CEEDC7] lg:w-1/4 w-3/4 p-6 ${cartOpen && 'open'}`} >
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-error text-white fixed right-5 top-2" onClick={() => setCartOpen(false)}>✕</label>
            <div className='text-center mt-4 mb-8'>
                <h2 className='font-bold text-xl'>Your Shopping Cart</h2>
                <h3 className='text-md'>Selected Items: <strong>{cartData.length}</strong></h3>
            </div>
            {
                cartData.map((item, index) => <CartProductCard data={item} key={index} />)
            }

            <h2 className='mt-4'>Subtotal &emsp; <span className='text-3xl font-bold'>BDT {total}</span> </h2>

            <button className='btn btn-outline w-full mt-8 normal-case'>
                <lord-icon
                    target="button"
                    src="https://cdn.lordicon.com/medpcfcy.json"
                    trigger="hover"
                    colors="primary:#fff"
                    style={{ width: "25px", height: "25px" }}>
                </lord-icon>
                &nbsp; Go to Cart 
            </button>

            {
                cartData.length && <button className='btn btn-white w-full mt-3 text-white normal-case'>
                    Checkout &emsp;
                    <lord-icon
                        target="button"
                        src="https://cdn.lordicon.com/zmkotitn.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "20px", height: "20px" }}>
                    </lord-icon>
                </button>
            }

        </section>
    )
}

export default Cart