import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './DonateCl.css'
import { Link } from 'react-router-dom'
function DonateCl() {
  return (
    <MainLayout>
    <div className='donatecl_main'>

      <div><Link to='/display-clotes'><button className='donate_button'>Donate An Existing Cloth</button></Link></div>
      {/* <p>Donate</p> */}
      <div> <Link to='/add-clothes'><button className='donate_button2'>Donate A New Cloth</button></Link></div>
    </div>
    </MainLayout>
  )
}

export default DonateCl
