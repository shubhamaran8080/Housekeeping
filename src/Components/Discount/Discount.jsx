import React from 'react'
import Button from '../Button/Button'
import FruitsSet from '../../Assets/dist.png'

const Discount = () => {
  return (
    // <section className='bg-zinc-100 py-10' style={{backgroundImage: `url(${FruitsSet})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>

       <section className='bg-zinc-100  bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FruitsSet})`}}> 
      
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-20 '>
            <span className='md:text-9xl text-7xl text-blue-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-lg'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Discount</h3>
                <p className='text-zinc-400 my-6'>Get a special discount on your very first grocery order! Shop daily essentials and enjoy big savings today. Freshness and fast delivery assured.</p>
                <Button content="Get Discount" />
            </div>

        </div>
    </section>
  )
}

export default Discount