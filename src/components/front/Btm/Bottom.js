import React from 'react'
import './Bottom.css'
import { FaInstagramSquare,FaFacebookSquare,FaWhatsappSquare } from "react-icons/fa";


function Bottom() {
  return (
    <>
<div className='logoB' > 
        <h3 >LOGO</h3>
</div>
<div className='allb'>

  <div className='pone'>
  <h1>contact us</h1>
  <span>Contact us</span>
  <span>FAQ</span> 

  </div>

  <div className='ptow'>
  <h1>Terms and Policies</h1>
  <span>Terms of Use</span>
  <span>Refund and Exchange Policy</span>
  <span>Privacy Policy</span>
  </div>
  
  <div className='pthree'>
  <h1>about the store</h1>
  <span>About the store</span>
  <span>Payment Methods</span>
  <span>shipping & Dilvery</span>
  </div>
  
</div>
<div className='icons'>
<FaInstagramSquare />
<FaFacebookSquare />
<FaWhatsappSquare />
</div>

    </>
  )
}

export default Bottom