import React, { useState, createContext } from 'react'
import { categories as allCategories, subCategories as allSubCategories, childCategories as allChildCategories  } from '../../data/categories'

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

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const initialFilter = {
    categories : [],
    subCategories : [],
    childCategories : [],
    sizes : [],
    maxPrice: Infinity,
    discount: { hasDiscount: false, discount: 0 },
  }

  const [remainingItems, setRemainingItems] = useState({cats: allCategories, subCats: allSubCategories, childCats: allChildCategories});

  const [filter, setFilter] = useState(initialFilter)
  
  const addInArray = (array, elt) => {
    !filter[array].includes(elt) && setFilter((filter) => ({ ...filter, [array]: filter[array].concat(elt) }))
    let otherElts = remainingItems[array].filter((element) => element.id !== elt.id)
    let itemLabel = (array === "categories" && "cats") || (array === "subCategories" && "subCats") || (array === "childCategories" && "childCats")
    setRemainingItems((remainingItems) => ({ ...remainingItems, [itemLabel]: otherElts }))
  }
  const removeFromArray = (array, elt) => {
    const otherElements = filter[array].filter((oElt) => oElt.id !== elt.id || oElt !== elt)
    filter[array] !== otherElements && setFilter((filter) => ({ ...filter, [array]: otherElements }))
    let itemLabel = (array === "categories" && "cats") || (array === "subCategories" && "subCats") || (array === "childCategories" && "childCats")
    setRemainingItems((remainingItems) => ({ ...remainingItems, [itemLabel]: [ ...remainingItems[itemLabel], elt] }))
  }

  const addCategory = (elt) => addInArray("categories", elt)
  const removeCategory = (elt) => removeFromArray("categories", elt)

  const addSubCategory = (elt) => addInArray("subCategories", elt)
  const removeSubCategory = (elt) => removeFromArray("subCategories", elt)

  const addChildCategory = (elt) => addInArray("childCategories", elt)
  const removeChildCategory = (elt) => removeFromArray("childCategories", elt)

  const addSize = (size) => addInArray("sizes", size)
  const removeSize = (size) => removeFromArray("sizes", size)

  const setMaxPrice = (price) => setFilter((filter) => ({ ...filter, maxPrice: price}))
  const removeMaxPrice = () => setFilter((filter) => ({ ...filter, maxPrice: Infinity }))

  const setDiscount = (discount) => setFilter((filter) => ({ ...filter, discount : { hasDiscount: true, discount: discount } }))
  const removeDiscount = () =>  setFilter((filter) => ({ ...filter, discount : { hasDiscount: false, discount: 0 } }))

  const resetFilterElement = (filterElement) => {
    setFilter((filter) => ({ ...filter, [filterElement]: initialFilter[filterElement] }))
  }

  const resetFilter = () => {
    setFilter(initialFilter)
  }

  return (
    <FilterContext.Provider value={{ filter, remainingItems, addCategory, removeCategory, addSubCategory, removeSubCategory, addChildCategory, removeChildCategory, addSize, removeSize, setMaxPrice, removeMaxPrice, setDiscount, removeDiscount, resetFilterElement, resetFilter }}>
      {children}
    </FilterContext.Provider>
  )
}