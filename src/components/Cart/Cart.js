import React, { useEffect, useState } from 'react'
import '../../assets/styles/cart.css'
import { getStoredCart } from '../../assets/utilities/dbLocal'
import CartProductCard from './CartProductCard'
import cartImg from '../../assets/images/cart.png'
import PrimaryButton from '../Buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const Cart = ({ setCartOpen, cartOpen }) => {
    const [cart, setCart] = useState([])

    // LOAD ALL THE PRODUCTS
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    // GET CART PRODUCTS FROM LOCALSTORAGE
    useEffect(() => {
        let savedCart = [];
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products?.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    // CART CALCULATION
    let subtotal = 0;
    cart.map(item => {
        return subtotal = subtotal + (item.price * 10 * item.quantity)
    })
    const total = subtotal;

    // SET PRODUCT NUMBER IN THE LOCALSTORAGE
    useEffect(() => {
        const numProduct = cart?.length;
        localStorage.setItem('cart-items', numProduct)
    }, [cart])
    return (
        <section className={`cart top-0 z-50 h-[100vh] bg-[#CEEDC7] lg:w-[30%] w-3/4 py-6 px-8 ${cartOpen && 'open'}`} >
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-error text-white fixed right-5 top-2" onClick={() => setCartOpen(false)}>✕</label>
            <div className='text-center mt-4 mb-8'>
                <h2 className='font-bold text-xl'>Your Shopping Cart</h2>
                <h3 className='text-md'>Selected Items: <strong>{cart.length}</strong></h3>
            </div>

            {
                cart?.length ?
                    cart?.map((item, index) => <CartProductCard data={item} key={index} />)
                    :
                    <div className='flex items-center justify-center'>
                        <img src={cartImg} className="h-[300px]" alt="" />
                    </div>
            }
            {
                total > 0 ?
                    <h2 className='mt-4'>Subtotal &emsp; <span className='text-3xl font-bold'>BDT {total}</span> </h2>
                    : <h2 className='mt-2 text-2xl font-bold text-center'>Your Shopping Cart is Empty </h2>
            }
            {
                cart?.length ?
                    <button className='btn btn-outline w-full mt-8 normal-case go-cart'>
                        <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/medpcfcy.json"
                            trigger="hover"
                            class="current-color"
                            style={{ width: "25px", height: "25px" }}>
                        </lord-icon>
                        &nbsp; Go to Cart
                    </button>
                    : <span></span>
            }

            {
                cart?.length ?
                    <button className='btn btn-white w-full mt-3 text-white normal-case'>
                        Checkout &emsp;
                        <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/zmkotitn.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </button>
                    :
                    <Link to='/products' className='mt-12 flex justify-center'>
                        <PrimaryButton>Shop Now </PrimaryButton>
                    </Link>

            }

        </section>
    )
}

export default Cart