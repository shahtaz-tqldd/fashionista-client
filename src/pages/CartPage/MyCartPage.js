import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { removeFromDb } from '../../assets/utilities/dbLocal'
import useTitle from '../../hooks/useTitle'
import { AuthContext } from '../../context/AuthProvider'

const MyCartPage = () => {
    useTitle("My Cart")
    const [num, setNum] = useState(1)
    const {cart, total} = useContext(AuthContext)

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
            <h1 className='text-gradient text-5xl font-bold text-center mb-8 leading-[70px]'>My Cart</h1>
            <div className="overflow-x-auto w-full">
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
                        {cart?.length ?
                            cart.map((item, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold capitalize">{item.name.toLowerCase()}</div>
                                            <div className="text-sm opacity-50">Size: 40</div>
                                            <div className="text-sm opacity-50">Colors: Blue</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className='text-2xl font-bold'>BDT {item.price * 10}</h2>
                                </td>
                                <td>
                                    <div className='flex items-center gap-3'>
                                        <button className='btn btn-sm rounded-sm btn-error text-white' disabled={num === 1} onClick={() => setNum(num - 1)}><IoMdRemove /></button>
                                        <h4>{num}</h4>
                                        <button className='btn btn-sm rounded-sm btn-error text-white' onClick={() => setNum(num + 1)}><IoMdAdd /></button>
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/products/${item.id}`} className="btn btn-ghost btn-xs">details</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleRemoveFromCart(item.id)} className='h-6 w-6'>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/jmkrnisz.json"
                                            trigger="hover"
                                            colors="primary:#ee6d66"
                                            style={{ width: "24px", height: "24px", cursor: "pointer" }}>
                                        </lord-icon>
                                    </button>
                                </td>
                            </tr>
                            ) : <h2 className='text-2xl mt-16'>No Items are added! Please go <Link to='/products' className='text-primary'>Shop</Link></h2>
                        }

                    </tbody>

                </table>
            </div>

            {cart.length>0 && <div className='mt-16 w-[360px] ml-auto p-10 bg-white rounded-2xl shadow-lg'>
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