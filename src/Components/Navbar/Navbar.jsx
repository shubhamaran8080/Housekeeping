import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10) 
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[]);



    return (
        <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}>
            <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center '>
                {/* logo */}
                <Link to='/' className='text-3xl font-bold ' >sr<span className='text-blue-500 uppercase'>U</span>shti pro<span className='text-blue-500 uppercase'>D</span>duct </Link>

                {/* desktop menu */}

                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li><a href='#' className='font-semibold tracking-wider text-blue-500 hover:text-blue-500'>Home</a></li>
                    <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-blue-500'>About us</a></li>
                    <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-blue-500'>Process</a></li>
                    <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-blue-500'>Contact</a></li>
                </ul>

                {/* nav action */}
                <div className='flex items-center gap-x-8'>
                    {/* input field */}
                    <div className='md:flex p-1 border-2 border-blue-500 rounded-full hidden'>
                        <input type="text" name="text" id="text" placeholder='search... ' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-blue-600 to-blue-500 text-white p-2 rounded-full hover:bg-blue-600'>
                            <FaSearch />
                        </button>
                    </div>
                    <a href='#' className='text-2xl text-zinc-800'>
                        <FaHeart />
                    </a>
                    <a href='#' className='text-2xl text-zinc-800'>
                        <GiShoppingBag />
                    </a>
                    {/* hamburger menu for mobile */}
                    <a href="#" className='text-2xl text-zinc-800 md:hidden ' onClick={toggleMenu}>
                        
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </a>
                </div>
                {/* mobile menu */}
                <ul className={`flex flex-col gap-y-15 bg-blue-500/15 backdrop-blur-xl shadow-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 rounded-lg transition-all duration-500  ${showMenu ? 'left-1/2' : ""} `}>
                    <li><a href='#' className='font-semibold tracking-wider text-blue-500 hover:text-blue-500'>Home</a></li>
                    <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-blue-500'>About us</a></li>
                    <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-blue-500'>Process</a></li>
                    <li><a href='#' className='font-semibold tracking-wider text-zinc-800 hover:text-blue-500'>Contact</a></li>
                    <li className='flex p-1 border-2 border-blue-500 rounded-full md:hidden'>
                        <input type="text" name="text" id="text" placeholder='search... ' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-blue-600 to-blue-500 text-white p-2 rounded-full hover:bg-blue-600'>
                            <FaSearch />
                        </button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar