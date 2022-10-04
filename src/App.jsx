import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import { ThemeProvider, CartProvider, FilterProvider } from './utils/context'
import { Header, Cart, Footer } from './containers'
import { Account, Auth, Checkout, Home, Product, Products } from './pages'

const App = () => {
  return (
    <Router>
      <ThemeProvider>
      <CartProvider>
      <FilterProvider>
        <Header />
        <Cart />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='product/:category/:productId' element={<Product />} />
          <Route path='/all' element={<Products />} />
        </Routes>
        <Footer />  
      </FilterProvider>
      </CartProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
