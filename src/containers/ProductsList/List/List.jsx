import React from 'react'
import { products } from '../../../data/products'

import { ListWrapper } from '../style'
import ProductPrev from './ProductPrev/ProductPrev'

const List = ({ listLenght, isOpened }) => {

  return (
    <ListWrapper className='list-wrapper'>
      {products.map((product, index) => 
        index+1 <= listLenght && <ProductPrev key={index} product={product} /> 
      )}
    </ListWrapper>
  )
}

export default List