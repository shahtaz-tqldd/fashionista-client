import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteShoppingCart } from '../../assets/utilities/dbLocal'
import { addToPurchased } from '../../assets/utilities/purchasedDb'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'

const Checkout = () => {
  useTitle("Checkout")
  const { cart, total, user } = useContext(AuthContext)
  const [btnDisable, setBtnDisable] = useState(true)
  const { displayName, email } = user
  const navigate = useNavigate()

  // FORM DATA
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');


  const handleHouseNoInput = (event) => {
    setHouseNo(event.target.value);
  };

  const handleStreetInput = (event) => {
    setStreet(event.target.value);
  };

  const handleAddressInput = (event) => {
    setAddress(event.target.value);
  };

  const handleZipCodeInput = (event) => {
    setZipCode(event.target.value);
  };

  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
  };

  // ORDER FORM
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(houseNo, street, address, zipCode, phone)
  }
  useEffect(() => {
    if (houseNo && street && address && zipCode && phone) {
      setBtnDisable(false)
    }
  }, [houseNo, street, address, zipCode, phone])

  const handlePlaceOrder = () => {
    navigate('/success')
    addToPurchased(cart)
    deleteShoppingCart()
  }

  return (
    <section className='flex flex-col'>
      <div className="alert alert-info shadow-lg mb-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Get 20% Discount by Subscribe our Newsletter</span>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col gap-12'>
        <div className='lg:w-[60%]'>
          <h2 className='text-xl font-bold mb-6'>Billing Information</h2>

          <form onSubmit={handleSubmit} data-aos="fade-right">
            <label className='ml-1'>Full Name</label>
            <input type="text" placeholder="Full Name" value={displayName} className="input input-bordered input-info w-full mb-3 mt-1" />

            <label className='ml-1'>House No.</label>
            <input type="text" placeholder="House No." onInput={handleHouseNoInput} className="input input-bordered input-info w-full mb-3 mt-1" required />

            <label className='ml-1'>Street</label>
            <input type="text" placeholder="Street" onInput={handleStreetInput} className="input input-bordered input-info w-full mb-3 mt-1" required />

            <label className='ml-1'>Address</label>
            <input type="text" placeholder="Address" onInput={handleAddressInput} className="input input-bordered input-info w-full mb-3 mt-1" required />

            <label className='ml-1'>Zip Code</label>
            <input type="number" placeholder="Zip Code" onInput={handleZipCodeInput} className="input input-bordered input-info w-full mb-3 mt-1" required />

            <label className='ml-1'>Phone</label>
            <input type="text" placeholder="Phone" onInput={handlePhoneInput} className="input input-bordered input-info w-full mb-3 mt-1" required />

            <label className='ml-1'>Email</label>
            <input type="email" placeholder="Email" value={email} className="input input-bordered input-info w-full mt-1" required />
          </form>

        </div>
        <div className='lg:w-[40%]'>
          <div className='sticky top-20'>
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
                ) : <h2 className='flex gap-1'>No Items added! Please go to <Link to='/products' className='text-colorGreen flex items-center gap-1'>Shop <lord-icon
                  target="a"
                  src="https://cdn.lordicon.com/zmkotitn.json"
                  trigger="hover"
                  colors="primary:#16c79e"
                  style={{ width: "20px", height: "20px" }}>
                </lord-icon></Link></h2>
              }
              <hr className='my-5' />
              <div className='flex justify-between'>
                <h2>Subtotal</h2>
                <h2 className='font-bold'>BDT {total}</h2>
              </div>

              <div className="form-control mt-10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="radio-10" className="radio checked:bg-primary" defaultChecked={true}/>
                  <span className="label-text">Cash On Delivery</span>
                </label>
              </div>
              <div className="form-control mt-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                  <span className="label-text">Online Payment</span>
                </label>
              </div>


              <button onClick={handlePlaceOrder} disabled={cart?.length === 0 || btnDisable} className='mt-8 btn btn-primary w-full normal-case text-white'>Place Order</button>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout