import React, { useState } from 'react'

const UseState = () => {
    
    const [click, setClick] = useState(0) 

  return (
    <div>
        <h1>click {click} time</h1>
        <button onClick={()=>setClick(click + 1)}>click</button>
        <button onClick={()=>setClick()}>reset</button>
    </div>
  )
}

export default UseState