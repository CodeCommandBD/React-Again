import React, { useEffect, useState } from 'react'

const UseEffe = () => {

    const [data, setData] = useState()
    useEffect( ()=>{
        (async()=>{
           let response = await fetch('https://jsonplaceholder.typicode.com/users')
           let json = await response.json()
            setData(json)
        })()
       
       
        
    }, )

  return (
    <div>
        {
           JSON.stringify(data)
        }
    </div>
  )
}

export default UseEffe