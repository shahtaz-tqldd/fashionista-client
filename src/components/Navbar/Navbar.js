import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediumButton from '../Buttons/MediumButton';
import SearchModal from '../Modals/SearchModal';
import logo from '../../assets/icons/logo.png'

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const navItems = (
        <>
            <li><Link to='/products'>Collections</Link></li>
            <li><Link to='/stores'>Store Location</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </>
    );

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

                    <Link to='/' className='textGradient text-[24px] font-bold flex items-center gap-2' style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                        <img src={logo} alt="" className='h-10' />
                        fashionista
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => setModalOpen(true)} className="cursor-pointer hover:text-primary flex items-center gap-1 mr-6">
                        <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/xfftupfv.json"
                            trigger="hover"
                            style={{ height: "20px", width: "20px" }}>
                        </lord-icon>
                        Search
                    </button>

                    {modalOpen && <SearchModal setModalOpen={setModalOpen} />}

                    <Link to='/login' className='ml-2'><MediumButton btnSpecially={'bg-[#EC7272] text-white'}>Sign In</MediumButton></Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar