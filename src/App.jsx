import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import shopping from './assets/shopping.svg'
import { Link } from "react-router-dom"
import HomePage from './homePage'
import TopBar from './topBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AboutUs from './aboutUs'
import Collection from './Collection'
import EachItem from './eachItem'
import Cart from './cart'
import ScrollToTop from './ScrollToTop'
import ErrorPage from './ErrorPage'

let individualProduct = []

function App() {
  const [num,setNum] = useState(0)
  const [cartItems,setCartItems] = useState([])

  return(
    <>
      <BrowserRouter >
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage individualProduct={individualProduct} num={num}/>} errorElement={<ErrorPage/>} />
        <Route path='/AboutUs' element={<AboutUs num={num}/>} errorElement={<ErrorPage/>} />
        <Route path='/Collection' element={<Collection num={num} individualProduct={individualProduct}/>} errorElement={<ErrorPage/>} />
        <Route path='/Collection/:id' element={<EachItem setNum={setNum} num={num} cartItems={cartItems} setCartItems={setCartItems} individualProduct={individualProduct}/>} errorElement={<ErrorPage/>}/>
        <Route path='/Cart' element={<Cart num={num} setNum={setNum} cartItems={cartItems} setCartItems={setCartItems}/>} errorElement={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
