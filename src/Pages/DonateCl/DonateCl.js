import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './DonateCl.css'
function DonateCl() {
  return (
    <MainLayout>
    <div className='donatecl_main'>

      <div><button className='donate_button'>Donate An Existing Cloth</button></div>
      {/* <p>Donate</p> */}
      <div><button className='donate_button2'>Donate A New Cloth</button></div>
    </div>
    </MainLayout>
  )
}

export default DonateCl
