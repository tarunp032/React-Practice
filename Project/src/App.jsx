import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reviews from './/pages/Reviews'
import FoodItem from './pages/FoodItem'
import FoodDetail from './/pages/FoodItemDetail'
import Customer from './pages/Customer'
import Product from './pages/Product'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/food' element={<FoodItem/>}/>
      <Route path='/food-detail' element={<FoodDetail/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
