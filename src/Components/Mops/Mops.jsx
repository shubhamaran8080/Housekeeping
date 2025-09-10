import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgMop from '../../assets/hubanner.jpg'
import { MdOutlinePsychology } from 'react-icons/md'


const Mops = () => {
  return (
    <div>
      <CategoryPage title="Mops & Buckets"  bgImage={BgMop} categories={['Mops' , 'Buckets']}/>
    </div>
  )
}

export default Mops