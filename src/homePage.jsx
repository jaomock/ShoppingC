import './App.css'
import { useState } from "react";
import { useEffect } from "react";
import { AllProducts }from './allProducts'
import Footer from './footer';

const HomePage = () => {
    
    
    return(
        <><div className='imageHolder'>
            <div className='mainBody'>
                <button id='homeBtn'>Shop Now</button>
            </div>
        </div>
        <AllProducts />
        <Footer />
        </>
    )
}

export default HomePage