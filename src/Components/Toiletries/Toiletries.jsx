import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgToilet from '../../assets/hubanner.jpg'

const Toiletries = () => {
  return (
    <CategoryPage title="Toiletries & Bathroom"  bgImage={bgToilet}  categories={['Toiletries','Bathroom']}/>
  )
}

export default Toiletries
