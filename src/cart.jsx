import TopBar from "./topBar"
import Footer from "./footer"
// import { cartItems } from "./eachItem"
import './index.css'
import { useState } from "react"

const Cart = ({num,setNum,cartItems,setCartItems}) => {

    const removeItem = (index) => {
        setNum(num-1)
        setCartItems(existingItem => {
            return existingItem.filter((_,currentIndex) => currentIndex !== index)
        })

        price = 0

        for(let i = 0 ; i < cartItems.length; i++){
            price += cartItems[i].price
    } 
    }

    let price = 0

    for(let i = 0 ; i < cartItems.length; i++){
            price += cartItems[i].price
    } 

    let topOpacity = 0
    let bottomBorder = ''

    if(cartItems.length === 0){
        topOpacity = 0
        bottomBorder = ''
    } else {
        topOpacity = 1
        bottomBorder = '2px solid rgb(185, 185, 185)'
    }

    return(
    <>
        <TopBar num={num}/>
        <div className="container">
            <table className="cartContainer">
                <thead>
                <tr style={{opacity:topOpacity,borderBottom:bottomBorder}} id="testing">
                    <th className="cartHeader">Item</th>
                    <th className="cartHeader"></th>
                    <th className="cartHeader">Price</th>
                    <th className="cartHeader">Size</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((cI,index) => 
                <>
                    <tr key={index} className="eachCartItem">
                    <td className="imageTD"><img id="cartImg" src={cI.imgURL}></img></td>
                    <td className="cartTitle">{cI.title}</td>
                    <td className="cartTitleTwo">${cI.price}</td>
                    <td className="cartTitleTwo">{cI.size}</td>
                    <td id="btntest"><button onClick={() => {removeItem(index)}} id="cartBtn">Remove</button></td>
                    </tr>
                </>
                    )}
                </tbody>
            </table>
            <div className="pTotal">
                <p>Total: ${price}</p>
            </div>
            </div>
        <Footer/>
    </>    
    )
}

export default Cart