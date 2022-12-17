import React from 'react'
import './Landing.css'
import {useNavigate} from 'react-router-dom'
const Landing = () => {
  const navigate=useNavigate()
  return (
    <section id='landing'>
    <div className='Landing_container'>
        <div className='Landing_content'>
            <div className='Landing_title'>
                Join The Vogue
            </div>
            <div className='Landing_quote'>
            Be the reason for someone's heartbeat.
            </div>
            <div className='Landing_buttons'>
                <div className='todonate'><button onClick={()=>{navigate('/donate-cl')}}>To Donate</button></div>
                <div className='needblood'><button onClick={()=>{navigate('/user-login')}}>To sell</button></div>
            </div>
        </div>
        <div className='Landing_pic'>

        </div>
    </div>
    </section>
  )
}

export default Landing