import React from 'react'
// import { useContext } from 'react'
import products from '../../../data/products'
// import { FilterContext } from '../../../utils/context'

import { ListWrapper } from '../style'
import ProductPrev from './ProductPrev/ProductPrev'

const List = ({ listLenght, isOpened }) => {

  // const { filter: {
  //   categories, subCategories, childCategories, sizes, maxPrice, discount
  // } } = useContext(FilterContext) 

  return (
    <ListWrapper className='list-wrapper'>
      {products.map((product, index) =>
       (index+1 <= listLenght && <ProductPrev key={index} product={product} />)
      )}
    </ListWrapper>
  )
}

export default List