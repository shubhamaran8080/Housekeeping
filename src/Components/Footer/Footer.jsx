import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-zinc-100  py-20'>
            <div className='flex flex-wrap gap-12 max-w-[1400px] mx-auto px-10 '>
                <div className='flex-1 basis-[350px]'>
                    {/* logo */}
                     <Link to='/' className='text-3xl font-bold ' >sr<span className='text-blue-500 uppercase'>U</span>shti pro<span className='text-blue-500 uppercase'>D</span>duct </Link>

                    <p className='text-zinc-600 mt-5 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and safe.</p>


                    <p className='text-zinc-600 mt-5'>&copy; 2025 Srushti Product. All rights reserved.</p>
                </div>


                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'> Company</h5>
                    </li>

                    <li className='mt-5'>
                        <a href="#" className='text-zinc -800 hover:text-blue-500'>About</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-blue-500'>FAQ</a>
                    </li>
                </ul>


                  <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'> Support</h5>
                    </li>

                    <li className='mt-5'>
                        <a href="#" className='text-zinc -800 hover:text-blue-500'>Suppourt center</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-blue-500'>Feedback</a>
                    </li>
                     <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-blue-500'>Contact us</a>
                    </li>
                </ul>

                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected Us</h5>

                    <p className='mt-5 text-zinc-600'>
                        Question & Feedback <br />We'd Love to Hear From You.
                    </p>

                    <div className='flex bg-white p-1 rounded-lg mt-5'>
                        <input type="email" name='email' id='email' autoComplete='off ' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none' />
                        <button className='bg-gradient-to-b from-blue-400 to-blue-500 p-2 rounded-lg text-white text-2xl hover:to-blue-600 cursor-pointer'>
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer