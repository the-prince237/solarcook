import React from 'react'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
       <div className="gpt3__header-content">
          <h1 className="gradient__text">Let's Build Something Amazing With GPT-3 OPenAi</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, alias eos repudiandae, perferendis dolor nisi nobis aperiam voluptas repellat debitis quidem accusamus, magnam corrupti cumque fugit officiis odio. Magni, voluptas!
          </p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder='your email' />
            <button type='button'>Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt="people" />
            <p>1600 people requested access visit in last 24 hours</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />  
        </div>
    </div>
  )
}

export default Header
