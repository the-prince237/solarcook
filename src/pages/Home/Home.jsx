import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Hero, ProductsList } from '../../containers'

import { categories } from '../../data/categories'
import { FilterContext } from '../../utils/context'

import { Title3 } from '../../utils/style/Atoms'
import { Categories, HomeProducts, HomeWrapper } from './style'

const Home = () => {

  const { filter, addCategory, resetFilterElement } = useContext(FilterContext)

  const setCategory = (cat) => {
    resetFilterElement("categories")
    resetFilterElement("subCategories")
    resetFilterElement("childCategories")
    addCategory(cat)
  } 

  return (
    <HomeWrapper className='page'>
      <Categories>
        {categories.map((cat, index) => (
          <Link className='category-link' key={index} to="/all" onClick={() => setCategory(cat)}>
            {cat.name}
          </Link>
        ))}
      </Categories>
      <Hero />
      <HomeProducts className='section__margin'>
        <Title3>Les plus appréciés</Title3>
        <ProductsList withFilter={false} listLenght={10} listTitle="Les Favoris" />
        <ProductsList withFilter={false} listLenght={10} listTitle="Les Meilleures ventes" />
      </HomeProducts>
      
    </HomeWrapper>
  )
}

export default Home