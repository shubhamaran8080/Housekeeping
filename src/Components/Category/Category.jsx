import React from 'react'
import Heading from '../Heading/Heading'
import LiquidCat from '../../assets/liquid.png'
import MopCat from '../../assets/mopc.png'
import NapCat from '../../assets/napc.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Category = () => {

    const renderCards = category.map(cards => {
        return (
        //    card
            <div className=' flex-1 basis-[300px] shadow-lg rounded-xl hover:scale-105 transition-transform duration-300' key={cards.id}>
                {/* card image */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={cards.image} className='absolute bottom-0 w-full h-60 object-contain'/>
                </div>
{/* card content */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl text-center'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{cards.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{cards.description}</p>
                    <Link to={cards.path} className='bg-gradient-to-b from-blue-400 to-blue-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-blue-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    }
    )

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="shop" zinc="by category" />

                {/* category cards */}
                <div className='flex flex-wrap gap-10 md:mt-15'>
{renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category

const category = [{
    id: 1,
    title: "Liquid Soap & Phenyl",
    description: 'Fresh, effective cleaners made with safe ingredients. Discover a wide range of liquid soaps and powerful phenyls for a spotless home.',
    image: LiquidCat,
    path: '/LiquidSoap'

}, {
    id: 2,
    title: "Mops & Buckets",
    description: 'Smart cleaning made simple. From absorbent mops to durable buckets built for daily use.',
    image: MopCat,
    path:'/Mops'

},
{
    id: 3,
    title: "Toiletries & Bathroom",
    description: 'Premium quality meats and fresh seafood. Ethically sourced and expertly prepared for your culinary needs.',
    image: NapCat,
    path:'/Toiletries'
}
]