import React from 'react'

import { ProductsHeader, ProductsList } from '../../containers/'
import { ProductsWrapper } from './style'
import products from '../../data/products'

const Products = () => {
  return (
    <ProductsWrapper>
      <ProductsHeader />
      <ProductsList withFilter={true} listLenght={products.length} listTitle={false} />
    </ProductsWrapper>
  )
}

export default Products