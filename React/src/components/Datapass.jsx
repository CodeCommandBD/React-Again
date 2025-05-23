import React from 'react'
import DatapassSub from './DatapassSub'

const Datapass = ({items, btn}) => {
  return (
    <div>
        <ul>
            <li>Name: {items.name}</li>
            <li>Age: {items.age}</li>
            <li>Address: {items.address} </li>
            <button onClick={btn}>click here</button>
        </ul>
        <DatapassSub items={items}></DatapassSub>
    </div>
  )
}

export default Datapass