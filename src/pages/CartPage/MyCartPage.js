import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { addToDb, removeFromDb, removeOneFromDb } from '../../assets/utilities/dbLocal'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../../context/AuthProvider'
import SectionHeader from '../../components/Typography/SectionHeader'
import NoItemsFound from '../../components/sections/NoItemsFound'

const MyCartPage = () => {
    useTitle("My Cart")
    const { cart, total } = useContext(AuthContext)

    // ADD ONE MORE PRODUCT
    const handleAddOne = (id) => {
        addToDb(id)
    }
    // REMOVE ADDED PRODUCT
    const handleRemoveOne = (id) => {
        removeOneFromDb(id)
    }
    // REMOVE FROM CART
    const handleRemoveFromCart = (id) => {
        removeFromDb(id)
    }
    // GO TO CHECKOUT PAGE
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div>
            <SectionHeader>My Cart</SectionHeader>
            {
                cart.length > 0 ?
                    <div className="overflow-x-auto w-full" data-aos="fade-up">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(({ name, id, img, price, quantity }, index) => <tr key={index}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold capitalize">{name.toLowerCase()}</div>
                                                    <div className="text-sm opacity-50">Size: 40</div>
                                                    <div className="text-sm opacity-50">Colors: Blue</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h2 className='text-2xl font-bold'>BDT {price * quantity * 10}</h2>
                                        </td>
                                        <td>
                                            <div className='flex items-center gap-3'>
                                                <button className='btn btn-sm rounded-sm btn-error text-white' disabled={quantity <= 1} onClick={() => handleRemoveOne(id)}><IoMdRemove /></button>
                                                <h4>{quantity}</h4>
                                                <button className='btn btn-sm rounded-sm text-white border-none' style={{ backgroundColor: "#16c79e" }} onClick={() => handleAddOne(id)}><IoMdAdd /></button>
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/products/${id}`} className="btn btn-ghost btn-xs">details</Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleRemoveFromCart(id)} className='h-6 w-6'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/jmkrnisz.json"
                                                    trigger="hover"
                                                    colors="primary:#ee6d66"
                                                    style={{ width: "24px", height: "24px", cursor: "pointer" }}>
                                                </lord-icon>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                }

                            </tbody>

                        </table>
                    </div>
                    : <NoItemsFound where={'Cart'}/>
            }

            {cart.length > 0 && <div className='mt-16 w-[320px] ml-auto p-10 bg-white rounded-2xl shadow-lg' data-aos="fade-up">
                <div className='flex justify-between items-end'>
                    <span className='text-xl'>Subtotal</span>
                    <h1 className='text-3xl font-bold'>BDT {total}</h1>
                </div>
                <button onClick={handleCheckout} className='btn btn-white w-full mt-12 text-white normal-case'>
                    Checkout &emsp;
                    <lord-icon
                        target="button"
                        src="https://cdn.lordicon.com/zmkotitn.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "20px", height: "20px" }}>
                    </lord-icon>
                </button>
            </div>}


        </div>
    )
}

export default MyCartPage