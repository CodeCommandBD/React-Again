import React, { useEffect, useState } from 'react'
import ReactDom from '../components/ReactDom'
import { useNavigate } from 'react-router-dom'


const Product = () => {

  const navigate = useNavigate()
  const handel = () => {
    navigate('/home')

  }
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {


    (async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://dummyjson.com/products')
        const json = await response.json()
        setProducts(json.products)
        setIsLoading(false)

      } catch (err) {
        console.error(err)
      }
    })()

  }, [])



  return (


    <div>
      <h1>ALL Products</h1>
      {isLoading && <p>products are loading....</p>}

      <div className='d-flex flex-wrap gap-3 '>

        {products && products.length > 0 &&

          products.map((product, i) => {
            const { id, title, category, price } = product
            return <div key={id} className='bg-black p-5'>
              <h5>Name: {title}</h5>
              <h4>Category: {category}</h4>
              <h2>Price: {price}</h2>
              <button>show details</button>
            </div>
          })
        }
      </div>
      <button onClick={handel}>go to home</button>
    </div>
  )
}

export default Product