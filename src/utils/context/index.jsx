import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isOn: false,
    items: [],
    total: 0,
    netTotal: 0
  });

  const productsInCart = cart.items.reduce((acc, item) => (
    acc.concat(item.product)
  ), []);

  const isInCartProducts = (product) => {
    if(cart.items.length === 0){
      return false;
    } else {
      let otherProducts = productsInCart.filter((oProd) => oProd.id !== product.id);
      if(otherProducts === productsInCart) {
        return false;
      } else {
        return true;
      }  
    }
  }
    
  const isAlreadyInCart = (product) => {
    if(isInCartProducts(product)) {
      return true;
    } else {
      return false;
    }

  }

  const addToCart = (product) => {
    if(!isAlreadyInCart(product)) {
      setCart((cart) => ({
          ...cart,
          items: [...cart.items, { product: product, occ: 1 }]
        }
      ))
    } else {
      let itemOcc = 0;
      cart.items.map((item) => {
        if(item.product.id === product.id){
          return itemOcc = item.occ
        }
        return 0;
      })
      let otherItems = cart.items.filter((item) => item.product.id !== product.id )
      setCart((cart) => ({
          ...cart,
          items: [...otherItems, { product: product, occ: parseInt(itemOcc)+1 }]
        })
      )
    };
    setCart((cart) => ({
      ...cart,
      total: cart.total + (product.price),
      netTotal: cart.netTotal + (product.price - product.price*product.discount)
    }))
  }

  const removeFromCart = (product) => {
    if(isAlreadyInCart(product)){
      let itemOcc = 0;
      cart.items.map((item) => {
        if(item.product.id === product.id){
          return itemOcc = item.occ
        }
        return 0;
      });
      let otherItems = cart.items.filter((item) => item.product.id !== product.id )

      if(itemOcc <= 1){
        setCart((cart) => ({
            ...cart,
            items: [...otherItems],
            total: cart.total - (product.price),
            netTotal: cart.netTotal - (product.price - product.price*product.discount)
          }
        ))
      } else {
        setCart((cart) => ({
            ...cart,
            items: [...otherItems, { product: product, occ: itemOcc-1 }],
            total: cart.total - (product.price),
            netTotal: cart.netTotal - (product.price - product.price*product.discount)
          }
        ))
      }
    }
  }

  const resetCart = () => {
    setCart((cart) => ({...cart, items: []}))
  }

  const toggleCart = (action) => {
    if(action) {
      setCart((cart) => ({ ...cart, isOn: action==="open" ? true : false }))
    } else {
      setCart((cart) => ({ ...cart, isOn: !cart.isOn }))
    }
  } 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
