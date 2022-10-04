import React, { useContext } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { CartContext } from '../../../../utils/context'

import  { ProductPrevWrapper, SupInfos, ProductImage, ProductInfos, Note, Bar, Command, ProductPrice, SubInfos, ProductLink, ProductName, ProductCategory,CartButton } from '../../style'

const ProductPrev = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  const { name, image, note, category, price, id } = product;

  const noteArray = [];

  for (let i = 1; i<=5; i++) {
    if(i<=note)  {
      noteArray.push(1);
    } else {
      noteArray.push(0);
    }
  }

  return (
    <ProductPrevWrapper>
      <SupInfos>
        <ProductInfos id='sup-infos'>
          <Note>
            {noteArray.map((bit, index) => 
              (bit === 1 && <AiFillStar key={index} />) || (bit === 0 && <AiOutlineStar key={index} />)
            )}
          </Note>
          <Bar />
          <Command>
            {/* <CommandButton className='button' to={`/checkout?toCheckout=product&productId=${id}`}>Commander</CommandButton> */}
            <ProductPrice>{price} {process.env.CURRENCY || "Fcfa"}</ProductPrice>
          </Command>
        </ProductInfos>
        <ProductImage src={`./images/product${image}.webp`} alt="" />
      </SupInfos>
      <SubInfos>
        <ProductLink to={`/product/${category}/${id}`}>
          <ProductName>{name}</ProductName>
          <ProductCategory>{category}</ProductCategory>
        </ProductLink>
        <CartButton className='button' onClick={() => addToCart(product)}><BiCart /></CartButton>
      </SubInfos> 
      
    </ProductPrevWrapper>
  )
}

export default ProductPrev