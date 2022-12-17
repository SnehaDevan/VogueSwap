import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import About from '../../components/About/About'
import Landing from '../../components/Landing/Landing'

import Donateto from '../../components/Donateto/Donateto'
const MainPage = () => {
  return (
    <div>
      <MainLayout>
         <Landing/>
         <About/>
         <Donateto/>
         
      </MainLayout>
    </div>
  )
}

export default MainPage