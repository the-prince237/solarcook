import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FooterWrapper } from './style'

const Footer = () => {
  return (
    <FooterWrapper className='section__padding'>
      <div>
        <span>made with <AiFillHeart className='heart-icon'/> by</span> | <span><a href="https://dyvixitsolutions.com">D'yvix It Solutions</a></span>
      </div>
      <div>Copyright 2022</div>
    </FooterWrapper>
  )
}

export default Footer