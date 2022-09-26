import React from 'react'

import { Title2 } from '../../utils/style/Atoms'
import Search from './Search/Search'
import { ProductsHeaderWrapper } from './style'

const ProductsHeader = () => {
  return (
    <ProductsHeaderWrapper className='gradient__bg'>
    <div id='products-header__left'>
      <Title2 className='gradient__text-white'>Market Place</Title2>
      <p>Profitez d'une large gamme de produits de qualité</p>
    </div>
    <Search />
  </ProductsHeaderWrapper>
  )
}

export default ProductsHeader