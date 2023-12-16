import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './index.css'

const featuredProducts = []
const allProducts = []

// export const AllProducts = () => {
    export function AllProducts(){
    // const [allProducts,setAllProducts] = useState([])
    // const [featuredProducts,setFeaturedProducts] = useState([])
    const [fProduct,setFProduct] = useState(false)

    useEffect(() => {

        // const abortCont = new AbortController();

        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }


        fetch("https://fakestoreapi.com/products", { mode: "cors",})
        .then(res => {
            return res.json()
        })
        .then(data => {
            for(let i = 0; i < data.length; i++){
                if(data[i].category === 'electronics'){
                    return
                } else {
                allProducts.push({id:data[i].id,title:data[i].title,price:data[i].price,desc:data[i].description,category:data[i].category,imgURL:data[i].image})
                }
            }
            
        })
        .then(() => {
            shuffle(allProducts)
            for(let i = 0; i < 4; i++){
                featuredProducts.push(allProducts[i])
                console.log(featuredProducts)
            }

            setFProduct(true)
        })
        .catch(err => {
            // if(err.name === 'AbortError'){
            //     console.log('Fetch aborted')
            // }
            console.log(err)
        })

        // return () => abortCont.abort()
    }, [])

    return(
        <>
        <div className='footerAll'>
            <div className="footerTitlee">
            <h2>Featured Products</h2>
            </div>
            <div className="footerBox">
            {featuredProducts.map(fP =>
                    <div className="eachFBox">
                        <img src={fP.imgURL} id='footerImg' ></img>
                        <h2 id='footerTitle' >{fP.title}</h2>
                        <h3 id='footerPrice' >${fP.price}</h3>
                    </div>
                )}
                </div>
        </div>
        </>
    )
    
}

// function LoadAllProduct(){
//     return(
//     <>
//         <div className='footerAll'>
//         <div className="footerBox">
//         {allProducts.map(fP =>
//                 <div className="eachFBox">
//                     <img src={fP.imgURL} id='footerImg' ></img>
//                     <h2 id='footerTitle' >{fP.title}</h2>
//                     <h3 id='footerPrice' >${fP.price}</h3>
//                 </div>
//             )}
//             </div>
//     </div>
//     </>
//     )
// }



// export const products = []
// export const featuredProducts = []

// export const [featuredProducts,setFeaturedProducts] = useState([])


// export async function allProducts(){

//     const getProduct = await fetch("https://fakestoreapi.com/products", { mode: "cors"})
//     let response = await getProduct.json()
//     // console.log(response)
//     for(let i = 0; i < response.length; i++){
//     products.push({id:response[i].id,title:response[i].title,price:response[i].price,desc:response[i].description,category:response[i].category,imgURL:response[i].image})
//     console.log(products)
//     }

//     function random(min,max){
//         return Math.random() * (max-min) + min;
//     }
//     for(let i = 0; i < 4; i++){
//         featuredProducts.push(products[Math.floor(random(1,20)) - 1])
//         console.log(products[Math.floor(random(1,20)) - 1])
//         console.log(featuredProducts)
//     }

// }
