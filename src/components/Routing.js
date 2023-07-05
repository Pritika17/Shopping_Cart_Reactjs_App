import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CartItems from './CartItems'
import About from './About'
import Contact from './Contact'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<CartItems/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Routing