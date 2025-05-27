import React from 'react'
import ReactDom from '../components/ReactDom'
import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate()
  const handel = () => {
    navigate('/home')
  }

  return (

    
    <div>
        
        Product
       <button onClick={handel}>go to home</button>
    </div>
  )
}

export default Product