import { useState } from 'react'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import { AnimatePresence } from 'framer-motion'
import About from './Pages/About'
import Cart from './Pages/Cart'
import WishList from './Pages/WishList'
import ProductDetail from './components/ProductDetail'
import ScrollToTop from './components/ScrollToTop'
import ToogleMenue from './components/ToogleMenue'

function App() {
  const [count, setCount] = useState(0)

  const location=useLocation()

  return (
    <>

    <ScrollToTop/>
     <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishList" element={<WishList/>}/>
      </Routes>
     </AnimatePresence>
    </>
  )
}

export default App
