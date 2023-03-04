import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../Typography/Logo';

const Footer = () => {
    const navItems = [
        { name: 'Products', path: '/products' },
        { name: 'Store Location', path: '/stores' },
        { name: 'Contact', path: '/contact' },
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
    ];
    const navItems2 = [
        { name: 'Privacy Policy', path: '/' },
        { name: 'Jobs', path: '/' },
        { name: 'Terms and Conditions', path: '/' },
    ];
    return (
        <footer className="mt-16">
            <section className="grid lg:grid-cols-4 grid-cols-2 mb-4 pt-12">
                <div>
                    <Logo/>
                    <h2 className='uppercase mt-3 text-xs lg:tracking-[4px] tracking-[1px]'>A clothing Brand</h2>
                </div>
                <div>
                    <h2 className="mb-2 font-bold">Menubar</h2>
                    <ul className="flex flex-col text-xs">
                        {navItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                <Link to={item.path} className="hover:underline">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 font-bold">Useful Links</h2>
                    <ul className="flex flex-col gap-[6px] text-xs">
                        {navItems2.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="hover:underline">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-sm'>
                    <h2 className="mb-2 font-bold">Reach Out to us</h2>
                    <span className='flex items-center gap-2 mb-[5px]'><HiOutlineMail /> shop@fashionista.com</span>
                    <span className='flex items-center gap-2 mb-[5px]'><HiOutlinePhone /> +99012345 </span>
                </div>
            </section>
            <hr />
            <section className="py-5 flex justify-between">
                <div className='lg:text-md md:text-sm text-xs'>All rights reserved to Fashionista &copy; {new Date().getFullYear()}</div>
                <div className="flex items-center gap-5 lg:text-xl md:text-lg text-md">
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <BsFacebook className="text-[#4267B2] hover:scale-125 tarnsition duration-300" />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <BsInstagram className="text-[#E1306C] hover:scale-125 tarnsition duration-300" />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <BsTwitter className="text-[#1DA1F2] hover:scale-125 tarnsition duration-300" />
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
