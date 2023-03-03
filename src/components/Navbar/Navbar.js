import React from 'react'
import { Link } from 'react-router-dom'
import MediumButton from '../Buttons/MediumButton'
// import logo from '../../assets/icons/logo.png'

const navItems = <React.Fragment>
    <li><Link to='/products'>Collections</Link></li>
    <li><Link to='/stores'>Store Location</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
</React.Fragment>

const Navbar = () => {
    return (
        <section className="fixed left-0 right-0 top-0 z-10 bg-white">
            <div className="navbar mx-auto max-w-[1200px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        {/* <Link to='/'>
                            <img src={logo} alt="" className='h-8' />
                        </Link> */}
                        <Link to='/' className='text-[#3E8E7E] text-xl font-bold' style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                            fashionista
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span>Search</span>
                    <Link to='/login'><MediumButton btnSpecially={'btn-outline'}>Sign In</MediumButton></Link>
                    <Link to='/register' className='ml-2'><MediumButton btnSpecially={'bg-error text-white'}>Sign Up</MediumButton></Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar