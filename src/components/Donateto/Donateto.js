import React from 'react'
 import shoe from '../../assets/shoes.png'
 import cloth from '../../assets/cloth.png'
function Donateto() {
  return (
    <div>
      <section id='donateany'>
        <div  className='don_container'>
            <div className='don_title'>
              <p className='anything' >  DONATE ANYTHING </p>

            </div>
            <div className='card_icon'>
            <div className='Abt_findicon'>
                    <div><img src={shoe}/></div>
                    <h4>Shoe</h4>
                </div>
            <div className='Abt_findicon'>
                    <div><img src={cloth}/></div>
                    <h4>Menswear</h4>
                </div>  
                <div className='Abt_findicon'>
                    <div><img src={cloth}/></div>
                    <h4>Womenswear</h4>
                </div>   
                <div className='Abt_findicon'>
                    <div><img src={cloth}/></div>
                    <h4>Kidswear</h4>
                </div>
                <div className='Abt_findicon'>
                    <div><img src={cloth}/></div>
                    <h4>Traditional wear</h4>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Donateto
