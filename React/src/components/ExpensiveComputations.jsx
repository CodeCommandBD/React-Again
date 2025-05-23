import React, { useRef } from 'react'

const ExpensiveComputations = () => {

    let ApiData = useRef()
    let pTag = useRef()

    const fetchData =async () =>{
       const respons = await fetch('https://jsonplaceholder.typicode.com/users')
        ApiData.current = await respons.json()

    }
    const showData = () =>{
        pTag.current.innerText = JSON.stringify(ApiData.current)
    } 

  return (
    <div>
        <p ref={pTag}></p>
        <button onClick={fetchData}>Call Data</button>
        <button onClick={showData}>Show Data Data</button>
    </div>
  )
}

export default ExpensiveComputations