import React from 'react'
import Grocery from '../../assets/housekeeping.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
      <div className=' max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35 min-h-screen '>
        {/* hero content */}

        <div className='flex-1'>
          <span className='bg-blue-100 text-color-500 text-lg px-5 py-2 rounded-full'>Export best quality..</span>
          <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>Shiny Clean <span className='text-blue-500'>Spaces</span> With <span className='text-blue-500'>Trusted </span> Housekeeping Products</h1>
          <p className='text-zinc-600 md:text-lg text-md max-w-[600px] my-5'>
            High-quality cleaning, safe for you and your family. Freshness in every product.
          </p>
          <Button content='Shop now' />
        </div >

        {/* hero image */}
        <div className='flex-1'>
          <img src={Grocery} alt="Hero image" />
        </div>
      </div>
    </section>

  )
}

export default Hero