import React from 'react'

const Heading = (props) => {
  return (
 <div className='w-fit mx-auto '>
            <h2 className='md:text-5xl text-[2.5rem]  font-bold'><span className='text-blue-500'>{props.highlight}</span> {props.zinc}</h2>
            <div className='w-35 h-1 bg-blue-300 md:mt-6 mt-3 ml-auto'></div>
          
        </div>
  )
}

export default Heading