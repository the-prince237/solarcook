import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import { ProductsListWrapper, ListTitle } from './style'
import { ListFilter } from '../../components'
import List from './List/List'

const ProductsList = ({ withFilter, listLenght, listTitle }) => {

  const [listIsOpened, setListIsOpened] = useState(true);

  return (
    <ProductsListWrapper isOpened={listIsOpened} className='section__margin'>
      {withFilter &&
        <ListFilter />
      }
      {listTitle &&
        <ListTitle onClick={() => setListIsOpened((isOpened) => !isOpened)}><h2>{listTitle}</h2><div className='chevron'><BiChevronDown /></div></ListTitle>
      }
      <List listLenght={listLenght} />
    </ProductsListWrapper>
  )
}

export default ProductsList