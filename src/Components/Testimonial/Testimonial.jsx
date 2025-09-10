import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Heading from '../Heading/Heading'


import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { FaStar } from 'react-icons/fa';



const Testimonial = () => {
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="What" zinc="Clients Say" />

        <div className='flex justify-end mt-6 py-6 gap-x-3'>
          <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer  '>
            <MdKeyboardArrowLeft />
          </button>
          <button className='custom-next text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer '>
            <MdKeyboardArrowRight />
          </button>
        </div>

        <Swiper navigation={{
          nextEl:".custom-next",
          prevEl:".custom-prev"
        }}
        loop={true}
        breakpoints={{
          640:{slidesPerView:1, spaceBetween:20},
          764:{slidesPerView:2, spaceBetween:20},
          1024:{slidesPerView:3, spaceBetween:20},
        }}
         modules={[Navigation]} className="mySwiper">
       {
        review.map(item=>{
          return(
              <SwiperSlide key={item.id} className='bg-zinc-100 rounded-xl p-8'>
          <div className='flex items-center gap-5'>
            <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-blue-500 outline-offset-4 overflow-hidden'>
              <img src={item.image}  className='w-full h-full'/>
            </div>
            <div>
              <h5 className='text-xl font-bold '>{item.name}</h5>
              <p className='text-zinc-600'>{item.profession}</p>
              <span className='flex text-yellow-300 mt-3 text-xl gap-1'>
                {Array.from({length: item.rating},(_, index)=>(
<FaStar key={index}/>
              ))}</span>
            </div>
          </div>

          <div className='mt-10 min-h-[15vh]'>
            <p className='text-zinc-600'>{item.para}</p>
          </div>

        </SwiperSlide> 
          )
        })
       }
      </Swiper>



       
      </div>
    </section>
  )
}

export default Testimonial

const review =[
{
  id:1,
  name:'Emily Johnson',
  profession:'Hotel Owner',
  rating:3,
  para:'FreshBasket is my go-to choice for all housekeeping needs. Their staff is professional, reliable, and thorough. I love how quickly they respond, and the booking process is super easy. The service quality and attention to detail always leave my home spotless and fresh!',
  image: Customer1,
},
{
  id:2,
  name:'David Smith',
  profession:'Hotel Owner',
  rating:3,
  para:'FreshBasket is my go-to choice for all housekeeping needs. Their staff is professional, reliable, and thorough. I love how quickly they respond, and the booking process is super easy. The service quality and attention to detail always leave my home spotless and fresh!',
  image: Customer2,
},{
  id:3,
  name:'Alya Zahra',
  profession:'Hotel Owner',
  rating:3,
  para:'FreshBasket is my go-to choice for all housekeeping needs. Their staff is professional, reliable, and thorough. I love how quickly they respond, and the booking process is super easy. The service quality and attention to detail always leave my home spotless and fresh!',
  image: Customer3,
},{
  id:4,
  name:'Carlos Mendes',
  profession:'Hotel Owner',
  rating:3,
  para:'FreshBasket is my go-to choice for all housekeeping needs. Their staff is professional, reliable, and thorough. I love how quickly they respond, and the booking process is super easy. The service quality and attention to detail always leave my home spotless and fresh!',
  image: Customer4,
},
{
  id:5,
  name:'Carlos Mendes',
  profession:'Hotel Owner',
  rating:3,
  para:'FreshBasket is my go-to choice for all housekeeping needs. Their staff is professional, reliable, and thorough. I love how quickly they respond, and the booking process is super easy. The service quality and attention to detail always leave my home spotless and fresh!',
  image:Customer5,
},
]


