import React from 'react'
import './Signup.css'
import MainLayout from '../../components/MainLayout/MainLayout'

import { Link } from 'react-router-dom'

const LoginPag = () => {
  return (
    <div>
       <MainLayout>
    <div className='login__form_main'>
      <div className="login_form__container"></div>
      <form action=""  className='login__form'>
        <p className='login__header'>Sign In</p>
        <input className='login__input' type="text"  placeholder='UserName' required/>
        <input className='login__input' type="text"  placeholder='Email Id' required/>
      
        <input className='login__input' type="password"   placeholder='password' required />
        <button className='login__button'>SIGN IN</button>
        <a className="forgotpassword" href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

        
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
