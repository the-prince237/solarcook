import React from 'react'
import gpt3Logo from '../../assets/logo.svg'

import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to your future bbefore others</h1>  
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>  
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord K12 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Sicial Media</p>
          <p>Counters</p>
          <p>contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoork K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>c 2021 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
