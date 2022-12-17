import React from 'react'
import './MainLayout.css'
import Navbar from '../Navbar/Navbar'

const MainLayout = ({children}) => {
  return (
    <>
     <Navbar/>
    <div classname='main_layout'>
    
      
      {children}
    </div>
    </>
  )
}

export default MainLayout