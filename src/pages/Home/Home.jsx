import React from 'react'

import { Hero, ProductsList } from '../../containers'
import { Title3 } from '../../utils/style/Atoms'
import { HomeProducts } from './style'

const Home = () => {
  return (
    <div className='page'>
      <Hero />
      <HomeProducts className='section__margin'>
        <Title3>Les plus appréciés</Title3>
        <ProductsList withFilter={false} listLenght={10} listTitle="Les Favoris" />
        <ProductsList withFilter={false} listLenght={10} listTitle="Les Meilleures ventes" />
      </HomeProducts>
      
    </div>
  )
}

export default Home