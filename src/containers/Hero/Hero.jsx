import React from 'react'

import { HeroWrapper } from './style'
import { Title1, Title3 } from '../../utils/style/Atoms'

const Hero = () => {
  return (
    <HeroWrapper className='section__padding section__margin gradient__bg'>
      <div>
        <Title1 className='gradient__text-white'>Profitez de nos promotions journalières</Title1>
        <Title3 className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cupiditate debitis, iusto cumque iste praesentium !</Title3>
      </div>
      
      <div className="image">
        <img src="./images/heroImage.png" alt="" />
      </div>
    </HeroWrapper>
  )
}

export default Hero