import './index.css'
import TopBar from './topBar'
import Footer from './footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

let aProducts = []

const Collection = ({num,individualProduct}) => {
    const params = useParams()
    const {browser} = params
    const [displayedProd,setDisplayedProd] = useState([])

    useEffect(() => {
        async function fetchData(){

        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        for(let i = 0 ; i < data.length; i++){
            if(data[i].category === 'electronics'){
                
            } else if(data[i].category === 'women\'s clothing'){
                let newProduct = {
                    id:data[i].id,
                    title:data[i].title,
                    price:data[i].price,
                    desc:data[i].description,
                    category:'fem',
                    imgURL:data[i].image,
                }
                aProducts.push(newProduct)
                setDisplayedProd(displayedProd => [...displayedProd,newProduct])

            } else if(data[i].category === 'men\'s clothing'){
                let newProduct = {
                    id:data[i].id,
                    title:data[i].title,
                    price:data[i].price,
                    desc:data[i].description,
                    category:'boy',
                    imgURL:data[i].image,
                }
                aProducts.push(newProduct)
                setDisplayedProd(displayedProd => [...displayedProd,newProduct])
            } else {
                let newProduct = {
                    id:data[i].id,
                    title:data[i].title,
                    price:data[i].price,
                    desc:data[i].description,
                    category:data[i].category,
                    imgURL:data[i].image,
                }
                aProducts.push(newProduct)
                setDisplayedProd(displayedProd => [...displayedProd,newProduct])
            }
        }
        }

        fetchData()
//something below isn't working. aProducts is not emptying. 
        return () => {
            console.log('useEffect cleanup working in collection')
            aProducts = []
            console.log(displayedProd)
            setDisplayedProd([])
        }
    }, [])

    function allP(){
        setDisplayedProd(aProducts)
        console.log(aProducts)
    }

    function men(){
        setDisplayedProd(aProducts.filter(aProducts => aProducts.category.includes('boy')))
        console.log(aProducts)

    }

    function women(){
        setDisplayedProd(aProducts.filter(aProducts => aProducts.category.includes('fem')))
        console.log(aProducts)
    }

    function jewelery(){
        setDisplayedProd(aProducts.filter(aProducts => aProducts.category.includes('jewelery')))
        console.log(aProducts)
    }

    function getID(key){
        for(let i = 0 ; i < aProducts.length; i++){
            if(aProducts[i].id === key){
                if(individualProduct.length === 1){
                    individualProduct.pop()
                    individualProduct.push(aProducts[i])
                    // browser = individualProduct[0].id
                } else {
                individualProduct.push(aProducts[i])
                // browser = individualProduct[0].id
                }
            }
        }
        console.log(browser)
    }

    return(
        <>
            <TopBar num={num}/>
            <div className='colContainer'>
            <div className='cSideBar'>
                <ul id='collectionUL'>
                    <li className='collectionLI' onClick={() => {allP()}} >All Products</li>
                    <li className='collectionLI' onClick={() => {men()}} >Mens</li>
                    <li className='collectionLI' onClick={() => {women()}} >Womens</li>
                    <li className='collectionLI' onClick={() => {jewelery()}} >Jewelry</li>
                </ul>
            </div>
            <div className='mainCol'>
                <div className='colBoxContainer'> 
                {displayedProd.map(dP =>
                                <Link className='linkCol' to={{pathname:'/Collection/:Item'}}>
                        <div key={dP.id} className="eachColBox"  onClick={(e) => getID(dP.id)}>
                            <img src={dP.imgURL} id='colImg' ></img>
                            <h2 id='footerTitle' >{dP.title}</h2>
                            <h3 id='footerPrice' >${dP.price}</h3>
                        </div>
                        </Link>
                    )}
                    </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Collection