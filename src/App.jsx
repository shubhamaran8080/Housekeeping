import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LiquidSoap from './Components/LiquidSoap/LiquidSoap'
import Mops from './Components/Mops/Mops'
import Toiletries from './Components/Toiletries/Toiletries'
import AllProduct from './Components/AllProduct/AllProduct'
import Layout from './Components/Layout/Layout'


const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:  <Layout/>,
      children:[
         {
      path:'/',
      element:  <Home/>,
    },
         {
      path:'/LiquidSoap',
      element:  <LiquidSoap/>,
    },
     {
      path:'/Mops',
      element:  <Mops/>,
    },
    {
      path:'/Toiletries',
      element:  <Toiletries/>,
    },
     {
      path:'/AllProduct',
      element:  <AllProduct/>,
    }
      ]
    },
    
  ],
    {
    basename: "/Housekeeping",   // 👈 ADD THIS LINE
  }

)
  return <RouterProvider router={router}/>
}

export default App