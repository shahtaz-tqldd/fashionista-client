import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const Register = () => {
  useTitle('Open New Account')
  return (
    <section className='h-[70vh] w-full flex items-center justify-center'>
      <div className='flex rounded-lg bg-white shadow-lg h-[450px] w-[700px] lg:flex md:flex hidden' data-aos="fade-right">
        <div className='lg:w-1/2 p-8'>
          <h2 className='text-xl font-bold text-center mb-4'>Open New Account</h2>
          <form>
            <input type="text" placeholder="Your Full Name" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-2" />
            <button className='btn btn-primary w-full text-white normal-case mt-4'>Register</button>
          </form>

          <button className='mt-3 btn btn-outline w-full normal-case flex items-center gap-2'>
            <img src="https://img.freepik.com/free-icon/search_318-265146.jpg" alt="" className='h-5' />
            Continue with Google
          </button>

          <p className='mt-4'>Already have an account? <Link to='/login' className='text-[#16c79e]'>Login Here</Link></p>
        </div>
        <div className='lg:w-1/2 bg-primary rounded-r-lg flex items-center justify-center'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" className='w-[80%]' />
        </div>
      </div>
    </section>
  )
}

export default Register