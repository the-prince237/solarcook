import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { SearchWrapper } from './style'

const Search = () => {
  return (
    <SearchWrapper>
      <input type="text" name="searched" placeholder='Recherchez Un Produit' />
      <button type="submit"><AiOutlineSearch /></button>
    </SearchWrapper>
  )
}

export default Search