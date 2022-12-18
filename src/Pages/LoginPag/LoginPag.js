import React from 'react'
import './LoginPag.css'
import MainLayout from '../../components/MainLayout/MainLayout'

import './LoginPag.css'

import { Link } from 'react-router-dom'
const LoginPag = () => {
  return (
    <div>
       <MainLayout>
    <div className='login__form_main'>
      <div className="login_form__container"></div>
      <form action=""  className='login__form'>
        <p className='login__header'>Login</p>
        <input className='login__input' type="text"  placeholder='Email Id' required/>
      
        <input className='login__input' type="password"   placeholder='password' required />
        <Link to="/acc-create"><button className='login__button'>LOG IN</button></Link>
        <a className="forgotpassword" href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

        <div className='right-login-form'>
<h4 >REGISTER</h4>
<p>IF YOU STILL DON'T HAVE A VOGUESPACE.COM ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</p>

<p className='right-p' >BY GIVING US YOUR DETAILS, PURCHASING IN VOGUESPACE.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</p>

{/* <Link  to="/signup" className="create-btn" type="button" >CREATE ACCOUNT </Link> */}
  </div>
        {/* <p className="forgot-password text-right mt-2"> */}
            {/*Forgot <a href="#">password?</a> */}
          {/* </p> */}
      </form>
    </div>
    </MainLayout>
    </div>
  )
}

export default LoginPag
