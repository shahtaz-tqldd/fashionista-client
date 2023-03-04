import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteShoppingCart } from '../../assets/utilities/dbLocal'
import { addToPurchased } from '../../assets/utilities/purchasedDb'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'

const Checkout = () => {
  useTitle("Checkout")
  const { cart, total } = useContext(AuthContext)
  const navigate = useNavigate()
  const handlePlaceOrder = () => {
    navigate('/success')
    addToPurchased(cart)
    deleteShoppingCart()
  }
  return (
    <React.Fragment>
      <div className="alert alert-info shadow-lg mb-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Get 20% Discount by Subscribe our Newsletter</span>
        </div>
      </div>
      <section className='flex lg:flex-row flex-col gap-12'>
        <div className='lg:w-[60%]'>
          <h2 className='text-xl font-bold mb-6'>Billing Information</h2>
          <form data-aos="fade-right">
            <input type="text" placeholder="Full Name" className="input input-bordered input-info w-full mb-2" />
            <input type="text" placeholder="House No." className="input input-bordered input-info w-full my-2" />
            <input type="text" placeholder="Street" className="input input-bordered input-info w-full my-2" />
            <input type="text" placeholder="Address" className="input input-bordered input-info w-full my-2" />
            <input type="text" placeholder="Zip Code" className="input input-bordered input-info w-full my-2" />
            <input type="text" placeholder="Phone" className="input input-bordered input-info w-full my-2" />
            <input type="text" placeholder="Email" className="input input-bordered input-info w-full my-2" />
          </form>
        </div>
        <div className='lg:w-[40%]'>
          <h2 className='text-xl font-bold mb-6'>Order Details</h2>
          <div className='w-full p-6 bg-white rounded-lg shadow-lg border-t-[6px] border-primary' data-aos="fade-left">
            <div className='flex justify-between'>
              <h2>Product</h2>
              <h2>Subtotal</h2>
            </div>
            <hr className='my-5' />
            {cart?.length ?
              cart.map((item, index) => <div key={index} className='flex justify-between my-2'>
                <div>
                  <h2 className='capitalize'>{item.name.toLowerCase()}</h2>
                  <h2 className='font-bold text-sm'>x{item.quantity}</h2>
                </div>
                <h2>BDT {item.price * 10}</h2>
              </div>
              ) : <h2>No Items added! Please go to <Link to='/products' className='text-primary'>Shop</Link></h2>
            }
            <hr className='my-5' />
            <div className='flex justify-between'>
              <h2>Subtotal</h2>
              <h2 className='font-bold'>BDT {total}</h2>
            </div>

            <div className="form-control mt-10">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text">Cash On Delivery</span>
              </label>
            </div>
            <div className="form-control mt-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text">Online Payment</span>
              </label>
            </div>


            <button onClick={handlePlaceOrder} disabled={cart.length === 0} className='mt-8 btn btn-primary w-full normal-case text-white'>Place Order</button>


          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Checkout