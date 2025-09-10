 import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import { useState } from 'react'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import products from '../ProductList/ProductList'
import { Link } from 'react-router-dom'

const Products = () => {

const categories = ['All', 'Liquid Soap', 'Phenyl', 'Mops', 'Toiletries']

const [activeCategory, setActiveCategory] =useState('All');



let filteredProducts = activeCategory === 'All' ? ProductList : ProductList.filter(product => product.category === activeCategory);

const renderCards = filteredProducts.slice(0,8).map((Product, index) => {
    return (
        <Cards 
          key={Product.id || index}   // ⬅️ Add this line here
          image={Product.image} 
          name={Product.name} 
          price={Product.price}
        />
    )
})

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" zinc="Products" />

            {/* tabs */}
            <div className='flex flex-wrap gap-5 justify-center mt-10'>
                {categories.map(category=>{
                    return(
                        // <button key={category} className='px-5 py-2 border border-zinc-900 rounded-full mr-5 hover:bg-zinc-900 hover:text-white transition'>

                        <button key={category} className={`cursor-pointer px-5 py-2 text-lg rounded-full hover:bg-gradient-to-b from-blue-400 to-blue-500 hover:text-white transition ${activeCategory === category ? 'bg-gradient-to-b from-blue-400 to-blue-500 text-white' : ''}`} onClick={()=>setActiveCategory(category)}>
                            {category}
                        </button>
                    )
                })}
            </div>

{/* product listing */}

<div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
    {renderCards}
</div>

<div className='flex justify-center mt-16'>
    <Link to='/AllProduct' className='bg-gradient-to-b from-blue-400 to-blue-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-blue-600 transition-all duration-300 cursor-pointer'>See All</Link>
</div>

        </div>
    </section>
  )
}

export default Products