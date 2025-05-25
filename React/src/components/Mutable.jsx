import React, { useRef } from 'react'

const Mutable = () => {

    let number = useRef(5);

    const change = () =>{
        number.current ++
        console.log(number.current);
    }

  return (
    <div>
        <button onClick={change}>Mutable</button>
    </div>
  )
}

export default Mutable