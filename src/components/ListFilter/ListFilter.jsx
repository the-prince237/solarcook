import React, { useContext, useState } from 'react'
import { AiFillCloseCircle,  AiFillPlusCircle } from 'react-icons/ai'

import { FilterContext } from '../../utils/context'
import { FilterWrapper, ChooseCategory, CategoriesOptions, Category, ChoosenCategories } from './style'

const ListFilter = () => {

  const { 
    filter: { categories, subCategories, childCategories, sizes, maxPrice, discount },
    remainingItems: { cats, subCats, childCats}, 
    addCategory, removeCategory,
    addSubCategory, removeSubCategory,
    addChildCategory, removeChildCategory,
    addSize, removeSize,
    setMaxPrice, removeMaxPrice,
    setDiscount, removeDiscount,
    resetFilterElement, resetFilter
  } = useContext(FilterContext);

  return (
    <FilterWrapper>
      <ChooseCategory>
        <ChoosenCategories>
          <div>
          {categories.length > 0 ? categories.map((cat, index) => (
            <div key={index}><span>{cat.name.split(" ").join("")}</span><AiFillCloseCircle className='close-icon' onClick={() => removeCategory(cat)} /></div>
          )) : <span>Choisissez une catégorie</span>}  
          </div>
          <span className='close-icon'>
            <AiFillCloseCircle onClick={() => resetFilterElement("categories")} />
          </span>
        </ChoosenCategories>
        <CategoriesOptions className='categories-options'>
          {cats.map(({id, name, slug}, index) => 
            <Category key={index} onClick={() => addCategory({id, name, slug})}>{name}</Category>
          )}
        </CategoriesOptions>
      </ChooseCategory>
      <ChooseCategory>
        <ChoosenCategories>
          <div>
          {subCategories.length > 0 ? subCategories.map((subCat, index) => (
            <div key={index}><span>{subCat.name.split(" ").join("")}</span><AiFillCloseCircle className='close-icon' onClick={() => addSubCategory(subCat)} /></div>
          )) : <span>Choisissez une sous-catégorie</span>}  
          </div>
          <span className='close-icon'>
            <AiFillCloseCircle onClick={() => resetFilterElement("subCategories")} />
          </span>
        </ChoosenCategories>
        <CategoriesOptions className='categories-options'>
          {subCats.map((subCat, index) => 
            categories.length > 0 ? categories.map((cat) => 
              subCat.cat === cat.id && <Category key={index} onClick={() => addSubCategory(subCat)}>{subCat.name}</Category>
          ) : <Category key={index} onClick={() => addSubCategory(subCat)}>{subCat.name}</Category>)}
        </CategoriesOptions>
      </ChooseCategory>
      <ChooseCategory>
        <ChoosenCategories>
          <div>
          {childCategories.length > 0 ? childCategories.map((childCat, index) => (
            <div key={index}><span>{childCat.name.split(" ").join("")}</span><AiFillCloseCircle className='close-icon' onClick={() => removeChildCategory(childCat)} /></div>
          )) : <span>Plus de précision</span>}  
          </div>
          <span className='close-icon'>
            <AiFillCloseCircle onClick={() => resetFilterElement("childCategories")} />
          </span>
        </ChoosenCategories>
        <CategoriesOptions className='categories-options'>
          {childCats.map((childCat, index) => 
            subCategories.length > 0 ? subCategories.map((subCat) => 
              childCat.subCat === subCat.id && <Category key={index} onClick={() => addChildCategory(childCat)}>{childCat.name}</Category>
          ) : <Category key={index} onClick={() => addChildCategory(childCat)}>{childCat.name}</Category>)}
        </CategoriesOptions>
      </ChooseCategory>
    </FilterWrapper>
  )
}

export default ListFilter