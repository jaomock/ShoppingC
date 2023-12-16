import './App.css'
import logo from './assets/logo.png'
import shopping from './assets/shopping.svg'
import { Link } from "react-router-dom"
import HomePage from './homePage'

const TopBar = () =>{
    return(
        <>
        <div className='sticky'>
        <div className='topBar'>
          <img src={logo} id='logo'></img>
          <h1 id='titleText'>Phantom Apparel</h1>
          <img src={shopping} id='checkout'></img>
        </div>
        <div className='navigation'>
          <ul id='topBarUL'>
            <li className='topBarLI'><Link to='/'>Home</Link></li>
            <li className='topBarLI'><Link to='/Collection'>Collection</Link></li>
            <li className='topBarLI'><Link to="/aboutUs">About</Link></li>
          </ul>
        </div>
        </div>
        </>
      )
    }

export default TopBar