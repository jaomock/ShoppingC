import './App.css'
import { useState } from "react";
import AllProducts from './allProducts';
import Footer from './footer';
import { Link } from "react-router-dom";
import TopBar from './topBar';

const HomePage = ({num,individualProduct,getID}) => {
    
    return(
        <>
        <TopBar num={num}/>
        <div className='imageHolder'>
            <div className='mainBody'>
                <Link to='/Collection'>
                <button id='homeBtn'>Shop Now</button>
                </Link>
            </div>
        </div>
        <AllProducts 
        getID={getID}
        individualProduct={individualProduct}
        />
        <Footer />
        </>
    )
}

export default HomePage