import React from 'react'
import './AccountCreate.css'
import MainLayout from '../../components/MainLayout/MainLayout'



function AccountCreate() {
  return (
    
      <MainLayout>
        
        
      <div className="acc_reg_main">
        
        <div className="acc_reg_heading">
           <h1>Welcome To VOGUESWAP!!</h1>
       
           <a href="/" className='signup__title'>sign up and continue</a>
        </div>
         
         


 <div className='donor_reg_inputs'>
        <form  className='acc_form' >

          <div className='content_su'>

        <input className='su__input' type="text"  placeholder='Full name' required/> 
       <input className='su__input'  type='number' placeholder='Phone Number' required/>
       <input className='su__input' type="text"   placeholder='E-mail' required/>
       <input className='su__input' type="text"   placeholder='State' required/>
       <input className='su__input' type="text"   placeholder='District' required/>
       <input className='su__input' type='number' placeholder='Pin Code' required/>
        
        </div>
       
       
        <button  type='submit '  className='donor_reg_button'>SignUp</button>

        
       
      </form>
      </div> 


        </div> 
      </MainLayout>
    
  )
}

export default AccountCreate
