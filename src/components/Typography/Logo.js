import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.png';

const Logo = () => {
    return (
        <Link
            to="/"
            className="textGradient lg:text-[24px] md:text-[20px] text-18px font-bold flex items-center gap-2 transition duration-300 hover:opacity-70"
            style={{ fontFamily: "'Ubuntu', sans-serif" }}
        >
            <img src={logo} alt="" className="lg:h-10 md:h-8 h-7" />
            fashionista
        </Link>
    )
}

export default Logo