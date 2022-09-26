import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../../data/products';

import { AiOutlineStock, AiFillTag, AiFillShop } from 'react-icons/ai'

import { ProductPage, ProductWrapper, ProductFullImage, ProductFullContent, ContentHeader, Categories, ProductStatus, ContentBody, ContentFooter } from './style'
import { Title2 } from '../../utils/style/Atoms'
import { ProductsHeader } from '../../containers';
import { CartContext } from '../../utils/context';

const Product = () => {

  const { addToCart } = useContext(CartContext)

  const { productId } = useParams();

  var product = {};

  products.map((prod) => {
    if(parseInt(prod.id) === parseInt(productId)) {
      product = prod;
    }
    return 0;
  })

  const {id, name, category, note, image, price} = product;

  return (
    <ProductPage>
      <ProductsHeader />
      <ProductWrapper className='section__margin'>
        <ProductFullImage src={`/images/product${image}.webp`} alt="" />
        <ProductFullContent>
          <ContentHeader>
            <Title2>{name}</Title2>
            <Categories>
              <div className="cat gradient__bg">{category}</div>
              <div className="linker" />
              <div className="sub-cat">sous-cat</div>
            </Categories>
            <ProductStatus>
              <div className='gradient__text'>En Stock <AiOutlineStock /> </div>
              <div className='gradient__text'>En Solde <AiFillTag /> </div>
            </ProductStatus>
          </ContentHeader>
          <ContentBody>
            <h3>Disponible en tailles : <span>Petit</span> | <span>Moyen</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius earum expedita pariatur quaerat repudiandae quibusdam sapiente ducimus, odit ullam error dolores dolorem molestiae id, provident labore eligendi culpa non!</p>
          </ContentBody>
          <ContentFooter>
            <div className='product__price'>{price} {process.env.CURRENCY || "Fcfa"}</div>
            <div className='product__shop'>
              <div className='product__shop-button' >
                <AiFillShop/>
              </div>
              <div className='product__shop-options'>
                <button onClick={() => addToCart(product)} className=''>Ajouter à la carte</button>
                <Link to="checkout" className=''>Commander</Link>    
              </div>
            </div>
          </ContentFooter>
        </ProductFullContent>
      </ProductWrapper>
    </ProductPage>
  )
}

export default Product