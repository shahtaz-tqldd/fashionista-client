import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/navlogo.png'

const Footer = () => {
    const navItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/'>About</Link></li>
    </React.Fragment>
    const navItems2 = <React.Fragment>
        <li><Link to='/'>Privacy Policy</Link></li>
        <li><Link to='/'>Jobs</Link></li>
        <li><Link to='/'>Terms and Conditions</Link></li>
    </React.Fragment>
    return (
        <footer className='mt-16'>
            <section className='grid lg:grid-cols-4 grid-cols-2 mb-4 pt-12'>
                <div>
                    <img src={logo} alt="" className='h-20' />
                </div>
                <div>
                    <ul className='flex flex-col gap-[5px] text-sm'>
                        {navItems}
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-[5px] text-sm'>
                        {navItems2}
                    </ul>
                </div>
                <div>
                    <h2 className='mb-2 font-bold'>Subsctibe to Fashionista</h2>
                    <button className='btn btn-sm px-6 btn-primary rounded text-white normal-case'>Subsctibe</button>
                </div>
            </section>
            <div style={{width:"100%", height:"2px", backgroundColor:"#aaa"}} ></div>
            <section className='py-3 flex justify-between'>
                <div>All rights reserved to Fashionista &copy; 2022</div>
                <div className='flex items-center gap-5 text-xl'>
                    <a href='https://facebook.com/' target="_blank" rel="noreferrer"><BsFacebook className='text-[#4267B2] hover:scale-125 tarnsition duration-300' /></a>
                    <a href='https://facebook.com/' target="_blank" rel="noreferrer"><BsInstagram className='text-[#E1306C] hover:scale-125 tarnsition duration-300' /></a>
                    <a href='https://facebook.com/' target="_blank" rel="noreferrer"><BsTwitter className='text-[#1DA1F2] hover:scale-125 tarnsition duration-300' /></a>
                    <a href='https://facebook.com/' target="_blank" rel="noreferrer"><BsYoutube className='text-[#FF0000] hover:scale-125 tarnsition duration-300' /></a>
                </div>
            </section>
        </footer>
    )
}

export default Footer