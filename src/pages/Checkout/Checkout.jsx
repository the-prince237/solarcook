import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../utils/context';

import { products } from '../../data/products';

import { CheckoutWrapper, CheckInfos, CheckOrder } from './style'

const Checkout = () => {

  const url = new URL(window.location);
  const toCheckout = url.searchParams.get("toCheckout");
  const productId = url.searchParams.get("productId");

  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  
  var product = {};

  toCheckout === "product" && products.map((prod) => {
    if(parseInt(prod.id) === parseInt(productId)) {
      product = prod;
    }
    return 0;
  })

  return (
    <CheckoutWrapper>
      <CheckInfos>
        CheckoutInfos
      </CheckInfos>
      <CheckOrder>
        {toCheckout === "product"&&
          <div>
            <div>
              <img src={`/images/product${product.image}.webp`} alt="" />
            </div>
          </div>
        }
      </CheckOrder>
    </CheckoutWrapper>
  )
}

export default Checkout