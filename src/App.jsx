import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import shopping from './assets/shopping.svg'
import { Link } from "react-router-dom"
import HomePage from './homePage'
import TopBar from './topBar'

function App() {


//   fetch("https://fakestoreapi.com/products", {mode: "cors",
// })
// .then(res=>res.json())
// .then(json=>console.log(json))

  return(
    <>
      <TopBar/>
      <HomePage/>
    </>
  )
}

export default App
