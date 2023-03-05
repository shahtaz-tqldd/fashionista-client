import React, { useContext } from 'react'
import { getPurchasedCart } from '../../assets/utilities/purchasedDb'
import Loader from '../../components/Loader/Loader'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'

const SuccessPage = () => {
    useTitle('success')
    const { user } = useContext(AuthContext)
    const { displayName, email } = user
    const purchased = getPurchasedCart()
    if (!purchased) {
        return <Loader />
    }
    const totalCost = purchased?.map(p => p.quantity * p.price)
    const sum = totalCost.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    const total = sum * 10


    return (
        <section>
            {/* ORDER SUCCESS ICON */}
            <div className='flex flex-col items-center justify-center'>
                <lord-icon
                    target="section"
                    src="https://cdn.lordicon.com/yqzmiobz.json"
                    trigger="hover"
                    colors="primary:#16c79e"
                    style={{ width: "100px", height: "100px" }}>
                </lord-icon>
                <h1 className='font-bold text-2xl mt-4'>Successfully Order Placed</h1>
            </div>

            {/* ORDER PROGRESS */}
            <div className='flex justify-center mt-8 scale-down'>
                <ul className="steps lg:w-3/4">
                    <li className="step step-primary">Order Placed</li>
                    <li className="step step-primary">Order Recieved</li>
                    <li className="step">Order Confirmed</li>
                    <li className="step">Shipping</li>
                    <li className="step">Order Done</li>
                </ul>
            </div>

            {/* ORDER SUMMERY */}
            <div className='mt-10 bg-white rounded-lg p-10 shadow-lg grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:w-[70%] mx-auto relative'>
                <div>
                    <h2 className='mb-3'><b>Buyer</b> : {displayName}</h2>
                    <h2 className='mb-3'><b>Address</b> : Hose 35 A, Hazi Afsaruddin Road, Dhanmondi, Dhaka</h2>
                    <h2 className='mb-3'><b>Phone</b> : +8801723456789</h2>
                    <h2 className='mb-3'><b>Email</b> : {email}</h2>
                </div>
                <span className='h-[70%] w-[1px] bg-[#bbb] absolute left-[48%] top-[15%] lg:block md:block hidden'></span>
                <div>
                    <h2 className='font-bold'>Purchased Products</h2>

                    {
                        purchased?.map((item, index) => <div className='my-2' key={index}>
                            <p className='capitalize'>{item.name.toLowerCase()}
                                <span className='font-bold lowercase'>&nbsp; x {item.quantity}</span>
                            </p>

                            <p className='capitalize text-xs text-[#777]'>Size : M &emsp; Colors : Blue</p>
                        </div>)
                    }

                    <hr className='my-5' />
                    <h2 className='font-bold'>Subtotal : BDT {total}</h2>
                    <p className='text-xs'>Payment : Cash on Delivery</p>
                </div>

            </div>
        </section>
    )
}

export default SuccessPage