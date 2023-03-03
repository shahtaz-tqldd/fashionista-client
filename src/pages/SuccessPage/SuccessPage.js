import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'

const SuccessPage = () => {
    useTitle('success')
    const { cart, total } = useContext(AuthContext)
    return (
        <section>
            <div className='flex flex-col items-center justify-center'>
                <lord-icon
                    target="section"
                    src="https://cdn.lordicon.com/yqzmiobz.json"
                    trigger="hover"
                    colors="primary:#16c79e"
                    style={{ width: "100px", height: "100px" }}>
                </lord-icon>
                <h1 className='font-bold text-2xl mt-6'>Successfully Order Placed</h1>
            </div>
            <div className='mt-10 bg-white rounded-lg p-10 shadow-lg grid grid-cols-2 gap-5 lg:w-[70%] mx-auto relative'>
                <div>
                    <h2 className='mb-3'><b>Buyer</b> : Shahtaz Rahman</h2>
                    <h2 className='mb-3'><b>Address</b> : Hose 35 A, Hazi Afsaruddin Road, Dhanmondi, Dhaka</h2>
                    <h2 className='mb-3'><b>Phone</b> : +8801521305382</h2>
                    <h2 className='mb-3'><b>Email</b> : shahtazrahman17@gmail.com</h2>
                </div>
                <span className='h-[70%] w-[1px] bg-[#bbb] absolute left-[48%] top-[15%]'></span>
                <div>
                    <h2 className='font-bold'>Purchased Products</h2>

                    {
                        cart.map((item, index) => <div className='my-2' key={index}>
                            <p className='capitalize'>{item.name.toLowerCase()}
                                <span className='font-bold lowercase'>&nbsp; x {item.quantity}</span>
                            </p>

                            <p className='capitalize text-xs text-[#777]'>Size : M &emsp; Colors : Blue</p>
                        </div>)
                    }

                    <hr className='my-5'/>
                    <h2 className='font-bold'>Subtotal : BDT {total}</h2>
                    <p className='text-xs'>Payment : Cash on Delivery</p>
                </div>

            </div>
        </section>
    )
}

export default SuccessPage