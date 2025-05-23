import React, { useRef } from 'react'

const LearnHok = () => {
  
    let header = useRef();
    let firstName,lastName = useRef();

    const change = () =>{
      header.current.src= 'https://placehold.co/600x400?text=Hello+World'
      header.current.setAttribute('height', '300px')
      header.current.setAttribute('width', '200px')
    }
    
    const cl = () => {
      let fname = firstName.value;
      let lname = lastName.value;

      alert(fname + lname)
    }

  return (
    <div>
        <h1 ref={header}></h1>
        <img ref={header} src="https://placehold.co/600x400" alt="" />

        <input ref={(a)=>firstName=a} type="text" name="" id="" />
        <input ref={(a)=>lastName=a} type="text" name="" id="" />

        <button onClick={cl}>submit</button>

        <button onClick={change}>br</button>
    </div>
  )
}

export default LearnHok