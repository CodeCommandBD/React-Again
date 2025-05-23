import React, { useRef } from 'react'

const Mutable = () => {

    let number = useRef(0);

    const change = () =>{
        number.current ++
        console.log(number.current);
    }

  return (
    <div>
        <button onClick={change}>click</button>
    </div>
  )
}

export default Mutable