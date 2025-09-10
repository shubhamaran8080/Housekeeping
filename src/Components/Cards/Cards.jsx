import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({image,name,price}) => {
    return (
        <div className='bg-zinc-100 p-4 rounded-xl'>
            {/* card icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-900 cursor-pointer hover:text-blue-400'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-blue-400 to-blue-500 text-white text-xl px-4 py-3 rounded-lg'>
                    <FaPlus />
                </button>
            </div>

            {/* card image */}
            <div className='w-full h-50  my-5 flex items-center justify-center'>
                <img src={image} className='w-full h-full object-contain' />
            </div>


{/* card content */}
            <div className='text-center'>
                <h3 className='text-2xl '>{name}</h3>
                <p className='text-2xl font-bold mt-4 mb-3'>₹{price.toFixed (2)}</p>
                <Button content="Add to Cart" />
            </div>

        </div>
    )
}

export default Cards