import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiPlant, PiFactory } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'

const Process = () => {

const stepRender=Steps.map(item =>{
    return(
        <div 
        key={item.id}
        className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100' : ''} `}>
            <span className='flex justify-center items-center text-white w-18 h-18 mx-auto rounded-full text-8xl bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed'>{item.number}</span>

            <div className='flex  items-center mt-10 gap-x-6'>
                
                    <span className='flex bg-gradient-to-b from-blue-400 to-blue-500 text-white w-15 h-15 rounded-full text-3xl justify-center items-center  '>
                        {item.icon}
                    </span>

                <div className='flex-1'>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.desc}</p>
                </div>
            </div>
        </div>
    )
})

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className='w-fit mr-auto'>
                    <Heading highlight="Our" zinc="Process" />
                </div>
                <div className='flex md:mt-20 mt-10 items-center justify-center md:pt-50 flex-wrap gap-y-20 gap-x-10'>
{stepRender}
                </div>
            </div>
        </section>
    )
}

export default Process

const Steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        desc: 'Chosen from trusted suppliers to bring you safe and effective products.',
        icon: <PiPlant />
    },
     {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        desc: 'It is a Crafted with care using quality ingredients for powerful cleaning results.',
        icon: <PiFactory />
    },
     {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Check',
        desc: 'Every item is tested to ensure safety, strength, and reliability.',
        icon: <SlBadge />
    },
     {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        desc: 'Every item is tested to ensure safety, strength, and reliability.',
        icon: <BsTruck />
    }
]