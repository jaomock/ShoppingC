import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function AllProducts({
        individualProduct,
    }){

        const [fProducts,setFProducts] = useState([])

        

    useEffect(() => {
        async function fetchData(){

        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        const ufData = await data.filter(data => !data.category.includes('electronics'))

        for(let i = 0 ; i < 4; i++){
            let x = Math.floor(Math.random() * ufData.length)
                let newProduct = {
                    id:ufData[x].id,
                    title:ufData[x].title,
                    price:ufData[x].price,
                    desc:ufData[x].description,
                    category:ufData[x].category,
                    imgURL:ufData[x].image,
                }
                ufData.splice(x,1)
                setFProducts(fProducts => [...fProducts,newProduct]) 
        }

        }

        fetchData()
//maybe put array in []?
    }, [])

    function getIDTwo(key){
        for(let i = 0 ; i < fProducts.length; i++){
            if(fProducts[i].id === key){
                if(individualProduct.length === 1){
                    individualProduct.pop()
                    individualProduct.push(fProducts[i])
                    // browser = individualProduct[0].id
                } else {
                individualProduct.push(fProducts[i])
                // browser = individualProduct[0].id
                }
            }
        }
    }

    return(
        <>
        <div className='footerAll'>
            <div className="footerTitlee">
            <h2>Featured Products</h2>
            </div>
            <div className="footerBox">
            {fProducts.map(fP =>
            <Link className='linkCol' to={{pathname:'/Collection/:Item'}}>
                    <div key={fP.id} className="eachFBox" onClick={(e) => getIDTwo(fP.id)} >
                        <img src={fP.imgURL} id='footerImg' ></img>
                        <h2 id='footerTitle' >{fP.title}</h2>
                        <h3 id='footerPrice' >${fP.price}</h3>
                    </div>
                    </Link>
                )}
                </div>
        </div>
        </>
    )
}
