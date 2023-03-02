import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const Login = () => {
  useTitle('Login')
  return (
    <section className='h-[70vh] w-full flex items-center justify-center'>
      <div className='flex rounded-lg bg-white shadow-lg h-[400px] w-[700px]'>
        <div className='lg:w-1/2 p-8'>
          <h2 className='text-xl font-bold text-center mb-4'>Login</h2>
          <form>
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-2" />
            <span className='text-sm text-primary cursor-pointer'>Forgot Password?</span><br />
            <button className='btn btn-primary w-full text-white normal-case mt-4'>Login</button>
          </form>

          <button className='mt-3 btn btn-outline w-full normal-case flex items-center gap-2'>
            <img src="https://img.freepik.com/free-icon/search_318-265146.jpg" alt="" className='h-5' />
            Continue with Google
          </button>

          <p className='mt-4'>Don't have any account? <Link to='/register' className='text-[#16c79e]'>Sign Up</Link></p>
        </div>
        <div className='lg:w-1/2 bg-primary rounded-r-lg flex items-center justify-center'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" className='w-[90%]' />
        </div>
      </div>
    </section>
  )
}

export default Login