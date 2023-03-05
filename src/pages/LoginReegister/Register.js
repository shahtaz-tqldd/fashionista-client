import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import useTitle from '../../hooks/useTitle'
import GoogleLogin from './GoogleLogin'

const Register = () => {
  useTitle('Sign Up')
  const { emailRegister, updateUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userInfo = { displayName: formData.fullName }
    emailRegister(formData.email, formData.password)
      .then(() => {
        updateUser(userInfo)
          .then(() => {
            toast.success("Account created successfully")
            navigate('/')
          })
          .catch(err => console.error(err))

      })
      .catch(err => console.error(err))
  }

  return (
    <section className='h-[70vh] w-full flex items-center justify-center'>
      <div className='flex flex-row-reverse rounded-lg bg-white shadow-lg h-[450px] w-[700px]' data-aos="flip-right">
        <div className='lg:w-1/2 p-8'>
          <h2 className='text-xl font-bold text-center mb-4'>Open New Account</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Full Name" className="input input-bordered w-full mb-2" name="fullName" value={formData.fullName} onChange={handleInputChange} required/>
            <input type="email" placeholder="Email" className="input input-bordered w-full" name="email" value={formData.email} onChange={handleInputChange} required/>
            <input type="password" placeholder="Password" className="input input-bordered w-full my-2" name="password" value={formData.password} onChange={handleInputChange} required/>
            <button className='btn btn-primary w-full text-white normal-case mt-4'>Register</button>
          </form>

          <GoogleLogin />

          <p className='mt-4'>Already have an account? <Link to='/login' className='text-colorGreen'>Login Here</Link></p>
        </div>
        <div className='lg:w-1/2 bg-[#B5D5C5] rounded-l-lg flex items-center justify-center lg:flex md:flex hidden'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" className='w-[80%]' />
        </div>
      </div>
    </section>
  )
}

export default Register