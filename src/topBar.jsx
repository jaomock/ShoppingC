import './App.css'
import logo from './assets/logo.png'
import shopping from './assets/shopping.svg'
import { Link } from "react-router-dom"
import HomePage from './homePage'

const TopBar = ({num}) =>{

  let opacityNum = 0

    if(num === 0){
      opacityNum = 0
    } else {
      opacityNum = 1
    }

    return(
        <>
        <div className='sticky'>
        <div className='topBar'>
          <img src={logo} id='logo'></img>
          <h1 id='titleText'>Phantom Apparel</h1>
          <Link to='/Cart'>
          <div className='checkOutBox'>
          <img src={shopping} id='checkout'></img>
          <p style={{opacity:opacityNum}} className='checkoutNum'>{num}</p>
          </div>
          </Link>
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