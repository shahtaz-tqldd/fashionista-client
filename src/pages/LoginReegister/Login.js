import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { BiError } from 'react-icons/bi'
import useTitle from '../../hooks/useTitle'
import GoogleLogin from './GoogleLogin'

const Login = () => {
  useTitle('Login')
  const { emailLogin } = useContext(AuthContext)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [formData, setFormData] = useState({
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
    emailLogin(formData.email, formData.password)
      .then(() => {
        toast.success('Login successful!')
        navigate(from, { replace: true })
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
  }

  return (
    <section className='h-[70vh] w-full flex items-center justify-center'>
      <div className='flex rounded-lg bg-white shadow-lg h-[450px] w-[700px]' data-aos="flip-right">
        <div className='lg:w-1/2 p-8'>
          <h2 className='text-xl font-bold text-center mb-4'>Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" className="input input-bordered w-full" name="email" value={formData.email} onChange={handleInputChange} required/>
            <input type="password" placeholder="Password" className="input input-bordered w-full my-2" name="password" value={formData.password} onChange={handleInputChange} required/>
            
            {error&& <span className='text-error text-sm flex items-center gap-1'><BiError />Your Email and Password is incorrect!</span>}
            <button className='btn btn-primary w-full text-white normal-case mt-4'>Login</button>
          </form>

          <GoogleLogin />

          <p className='mt-10'>Don't have an account? <Link to='/register' className='text-colorGreen'>Register Here</Link></p>
        </div>
        <div className='lg:w-1/2 bg-[#D6E4E5] rounded-r-lg flex items-center justify-center lg:flex md:flex hidden'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" className='w-[80%]' />
        </div>
      </div>
    </section>
  )
}

export default Login