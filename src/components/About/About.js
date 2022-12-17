import React from 'react'
import './About.css'
import abtdonate from '../../assets/abtdonate.png'
import Barter from '../../assets/Barter.png'
import giftbx from '../../assets/giftbx.png'
const About = () => {
  return (
    <section id='about'>
    <div className='About_container'>
            <div className='About_title'>
            HOW WE WORK
            </div>
            <div className='About_quote'>
            Find  charity center near your location and make a donation in less than 5 minutes            </div>
            <div className='About_cards'>
                <div className='Abt_findBlood'>
                    <div><img src={Barter}/></div>
                    <h4>Enter the details, and schedule a pickup. *convenience fee applicable.
You can also choose to go for the drop off option in case you want to drop the donations yourself.</h4>
                </div>
                <div className='Abt_getNoti'>
                <div><img src={abtdonate}></img></div>
                    <h4>We will come to your doorstep to pick up the donations in the chosen slot and deliver them to the NGO where they can be given a new life.</h4>
                </div>
                <div className='Abt_free'>
                <div><img src={giftbx}></img></div>
                    <h4>Our brand partners provide our donors gifts* as a “gesture of thanks” for making a difference.
Be ready to get surprised! Save Life Connect is forever Free !!</h4>
                </div>
            </div>
        
        
    </div>
    </section>
  )
}

export default About