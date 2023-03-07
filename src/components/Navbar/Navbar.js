import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MediumButton from '../Buttons/MediumButton';
import { FiLogIn } from 'react-icons/fi'
import { BsCart2 } from 'react-icons/bs'
import SearchModal from '../Modals/SearchModal';
import Logo from '../Typography/Logo';
import { AuthContext } from '../../context/AuthProvider';
import '../../assets/styles/lord-icons.css'
import { toast } from 'react-hot-toast';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { getPurchasedCart } from '../../assets/utilities/purchasedDb';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { cartOpen, setCartOpen, logout, user } = useContext(AuthContext)
    const purchased = getPurchasedCart()

    const navigate = useNavigate()
    // logout 
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.error('You are logged out!')
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const name = user?.displayName?.split(' ')[0]
    const navItems = (
        <>
            <li><Link to='/products' className='flex items-center gap-1'>
                <lord-icon
                    target="a"
                    src="https://cdn.lordicon.com/hyhnpiza.json"
                    trigger="hover"
                    style={{ height: "20px", width: "20px" }}>
                </lord-icon>
                Collections</Link>
            </li>
            <li><Link to='/stores' className='flex items-center gap-1'>
                <lord-icon
                    target="a"
                    src="https://cdn.lordicon.com/osuxyevn.json"
                    trigger="hover"
                    style={{ height: "20px", width: "20px" }}>
                </lord-icon>
                Store Location
            </Link></li>
            <li><Link to='/contact' className='flex items-center gap-1'>
                <lord-icon
                    target="a"
                    src="https://cdn.lordicon.com/hpivxauj.json"
                    trigger="hover"
                    style={{ height: "20px", width: "20px" }}>
                </lord-icon>
                Contact
            </Link></li>
        </>
    );
    return (
        <section className="fixed left-0 right-0 top-0 z-10 bg-[#fff]">
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
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => setModalOpen(true)} className="cursor-pointer hover:text-primary flex items-center gap-1 mr-5 color-change">
                        <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/xfftupfv.json"
                            trigger="hover"
                            class="set-color"
                            style={{ height: "20px", width: "20px" }}>
                        </lord-icon>
                        <span className='lg:block md:block hidden'>Search</span>
                    </button>
                    {
                        !user &&
                        <Link to='/wish-list' className="hover:text-primary flex items-center gap-1 mr-5 color-change">
                            <lord-icon
                                target="a"
                                src="https://cdn.lordicon.com/pnhskdva.json"
                                trigger="hover"
                                class="set-color"
                                style={{ height: "20px", width: "20px" }}>
                            </lord-icon>
                            <span className='lg:block md:block hidden'>WishList</span>
                        </Link>
                    }

                    {modalOpen && <SearchModal setModalOpen={setModalOpen} />}

                    <button onClick={() => setCartOpen(!cartOpen)} className='mr-5 lg:hidden md:hidden block'><BsCart2 className='text-xl pb-[1px] text-error' /></button>

                    {/* SIGN IN */}
                    {!user ? <>
                        <Link to='/login' className='mr-2 lg:hidden md:hidden block'><FiLogIn className='text-xl text-colorRed' /></Link>
                        <Link to='/login' className='ml-2 lg:block md:block hidden'><MediumButton btnSpecially={'bg-colorRed text-white'}>Sign In</MediumButton></Link>
                    </> :
                        <>
                            <span className='mr-2 font-bold textGradient'>{name}</span>
                            <div className={`dropdown ${modalOpen && 'hidden'}`}>
                                <label tabIndex={0}>
                                    <label tabIndex={0}>
                                        <IoIosArrowDropdownCircle className='text-xl cursor-pointer text-colorRed' />
                                    </label>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content -ml-44 mt-6 p-2 shadow bg-[#DDF7E3] rounded-lg text-base-content w-52">
                                    <li>
                                        <Link to='/cart' className="hover:text-primary flex items-center gap-1">
                                            <lord-icon
                                                target="a"
                                                src="https://cdn.lordicon.com/hyhnpiza.json"
                                                trigger="hover"
                                                style={{ height: "20px", width: "20px" }}>
                                            </lord-icon>
                                            My Cart</Link>
                                    </li>
                                    <li>
                                        <Link to='/wish-list' className="hover:text-primary flex items-center gap-1">
                                            <lord-icon
                                                target="a"
                                                src="https://cdn.lordicon.com/pnhskdva.json"
                                                trigger="hover"
                                                class="set-color"
                                                style={{ height: "20px", width: "20px" }}>
                                            </lord-icon>
                                            <span>WishList</span>
                                        </Link>
                                    </li>
                                    {
                                        purchased?.length > 0 &&
                                        <li>
                                            <Link to='/success' className="hover:text-primary flex items-center gap-1">
                                                <lord-icon
                                                    target="a"
                                                    src="https://cdn.lordicon.com/medpcfcy.json"
                                                    trigger="hover"
                                                    class="set-color"
                                                    style={{ height: "20px", width: "20px" }}>
                                                </lord-icon>
                                                <span>My Orders</span>
                                            </Link>
                                        </li>
                                    }

                                    <li><button onClick={handleLogout} className="btn mt-4 w-full text-white normal-case hover:btn-error hover:text-white">Logout</button></li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Navbar