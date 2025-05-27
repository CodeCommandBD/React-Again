import React, { useEffect, useState } from 'react'
import ReactDom from '../components/ReactDom'
import { useNavigate } from 'react-router-dom'


const Product = () => {

  const navigate = useNavigate()
  const handel = () => {
    navigate('/home')
    
  }
  const [products, setProducts] = useState([])

  
  

  useEffect(()=>{
    ( async () => {
      const response = await fetch('https://dummyjson.com/products')
      const json = await response.json()
      setProducts(json.products)
      console.log(json.products);
      
    })()


  },[])

  

  return (

    
    <div>
       {products && products.length > 0 &&

        products.map((product, i)=>{
          const {id, title, category, price} = product
          return <div key={id}>
            <h3>Name: {title}</h3>
            <h4>Category: {category}</h4>
            <h2>Price: {price}</h2>
          </div>
        })
       }
       <button onClick={handel}>go to home</button>
    </div>
  )
}

export default Product