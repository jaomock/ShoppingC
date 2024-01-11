import TopBar from "./topBar"
import Footer from "./footer"
import './index.css'
import { useState } from "react"


const EachItem = ({setNum,num,setCartItems,cartItems,individualProduct}) => {

    let itemSize = ''
    let itemId = 0

    function addCart(){
        setNum(num+1)
        if(individualProduct[0].category != 'jewelery'){
        let cartObj = {
            index:itemId,
            id:individualProduct[0].id,
            title:individualProduct[0].title,
            price:individualProduct[0].price,
            category:individualProduct[0].category,
            imgURL:individualProduct[0].imgURL,
            size:itemSize,
        }
        setCartItems(cartItems => [...cartItems,cartObj])
        itemId++
    } else {
        let cartObj = {
            index:itemId,
            id:individualProduct[0].id,
            title:individualProduct[0].title,
            price:individualProduct[0].price,
            category:individualProduct[0].category,
            imgURL:individualProduct[0].image,
            size:'One Size',
        }
        setCartItems(cartItems => [...cartItems,cartObj])
        itemId++
    }
    }

    const [update,setUpdate] = useState('sizeLIClicked')

    function selectedSize(e){

        let allSizes = document.querySelectorAll('.sizeLI')
        let ulParent = document.querySelector('.sizeUL')
        let clickedSize = document.querySelector('.sizeLIClicked')

        for(let i = 0 ; i < allSizes.length + 1; i++){
        // console.log(allSizes[i].childNodes[0].textContent)

        // if(clickedSize.textContent === e.target.innerHTML){
        //     clickedSize.classList.add('sizeLI')
        //     clickedSize.classList.remove(update)
        // }

            if(ulParent.childNodes[i].className === update){
                ulParent.childNodes[i].classList.remove(update)
                ulParent.childNodes[i].classList.add('sizeLI')
            }

            if(e.target.innerHTML === ulParent.childNodes[i].textContent){
                ulParent.childNodes[i].classList.remove('sizeLI')
                ulParent.childNodes[i].classList.add('sizeLIClicked')
            }
        }

    if(e.target.innerHTML === 'L'){
        itemSize = 'Large'
    } else if(e.target.innerHTML === 'M'){
        itemSize = 'Medium'
    } else if(e.target.innerHTML === 'S'){
        itemSize = 'Small'
    } else if(e.target.innerHTML === 'XL') {
        itemSize = 'Extra Large'
    } 
}


    return(
    <>
        <TopBar
        num={num}
        />
        {individualProduct.map((iP,index) =>
        <div key={index} className="indCont">
        <div className="indContLeft">
            <img id="indImg" src={iP.imgURL}></img>
            </div>
        <div className="indContRight">
            <h2 id="indTitle">{iP.title}</h2>
            <h3 id="indPrice">${iP.price}</h3>
            <hr id="indUnderline"></hr>
            <p>{iP.desc}</p>
            <div className="sizes">
                <ul className="sizeUL">
                    <li className="sizeLI" onClick={(e) => {selectedSize(e)}}>S</li>
                    <li className="sizeLI" onClick={(e) => {selectedSize(e)}}>M</li>
                    <li className="sizeLI" onClick={(e) => {selectedSize(e)}}>L</li>
                    <li className="sizeLI" onClick={(e) => {selectedSize(e)}}>XL</li>
                </ul>
            </div>
            {/* <div className="dropdown">
                <button onClick={() => {pickSize()}} className="dropBtn">Size</button>
            </div>
            <div id="myDropdown" className="dropdown-content">
                <a href="#">Small</a>
                <a href="#">Medium</a>
                <a href="#">Large</a>
                <a href="#">Extra Large</a>
            </div> */}
            <div className="indBtn">
            <button id="indBtn" onClick={() => {addCart()}} >ADD TO CART</button>
            </div>
        </div>
        </div>
            )}
        <Footer/>
    </>
    )
}

export default EachItem