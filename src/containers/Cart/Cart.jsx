import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../utils/context'

import  { CartWrapper, CartHeader, CartBody, CartFooter } from './style'

const Cart = () => {

  const { cart, addToCart, removeFromCart, resetCart, toggleCart } = useContext(CartContext)

  return (
    <CartWrapper isOn={cart.isOn}>
      <CartHeader>
        <div onClick={() => toggleCart("close")}>close</div>
      </CartHeader>
      <CartBody>
        {cart.items.length > 0 ? 
          cart.items.map(({product, occ}, index) => 
            <div key={index}>
              <div>{product.name} - {occ}</div>
              <div>
                <p onClick={() => removeFromCart(product)}>-</p>
                <p onClick={() => addToCart(product)}>+</p>
              </div>
              <div>
                <div>{occ*(product.price - (product.price*product.discount))}</div>
                <p>{occ*(product.price)}</p>
              </div>
            </div>) :
          <div>
            panier vide
          </div>
        }
      </CartBody>
      <CartFooter>
        <div>
          <div>{cart.netTotal}</div><p>{cart.total}</p>
        </div>
        <Link to={`/checkout?cart=${true}`}>
          Commander
        </Link>
        <div onClick={resetCart}>Reset</div>
      </CartFooter>
    </CartWrapper>
  )
}

export default Cart