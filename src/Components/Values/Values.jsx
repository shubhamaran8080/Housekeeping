import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from "/src/assets/hous.png";

const Values = () => {

    const leftValues =values.slice(0,2).map(item=>{
        return(
            <div key={item.id}className='flex md:flex-row-reverse items-center gap-6 mb-10' >
                <div >
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-blue-400 to-blue-500 w-15 h-15 rounded-full '>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2 md:w-[] w-100 '>{item.description}</p>
                </div>
            </div>
        )
    })


     const rightValues =values.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex items-center gap-6 mb-10' >
                <div >
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-blue-400 to-blue-500 w-15 h-15 rounded-full '>{item.icon}</span>
                </div>
                <div className=''>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2 md:w-[] w-100 '>{item.description}</p>
                </div>
            </div>
        )
    })



    return (
        <section>
            <div className='max-w-[1400px] mx-auto py-20 px-10 py-20'>
                <Heading highlight="Our" zinc="Values" />


                <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15 '>
                    {/* left values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between w-1/2'>
                        {leftValues}
                    </div>

                    <div className='md:flex w-1/2 hidden'>
                        <img src={Basket} />
                    </div>
                    {/* right values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between w-1/2'>
                        {rightValues}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Values

const values = [{
    id: 1,
    title: "Trusted Choice",
    description: 'Quality products designed to bring comfort and care every single day.',
    icon: <FaHeart />

}, {
    id: 2,
    title: "Fresh Everyday",
    description: 'Fresh solutions created to deliver healthy living for you and family.',
    icon: <FaLeaf />
},

{
    id: 3,
    title: "Safe & Strong",
    description: 'Safe formulas built to give powerful cleaning with lasting results.',
    icon: <FaShieldAlt />
},
{
    id: 4,
    title: "Eco-Certified",
    description: 'Eco choices made to protect nature while keeping your home clean.',
    icon: <FaSeedling />
},


]