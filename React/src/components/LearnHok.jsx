import React, { useRef } from 'react'

const LearnHok = () => {
  
    let header = useRef();
    let firstName,lastName = useRef();

    const change = () =>{
      header.current.src= 'https://placehold.co/600x400?text=Hello+World'
      header.current.setAttribute('height', '300px')
      header.current.setAttribute('width', '200px')
    }
    
    const inputCl = () => {
      let fname = firstName.value;
      let lname = lastName.value;

      alert(fname+' '+ lname)
    }

  return (
    <div>
        {/* <h1 ref={header}></h1> */}
        <img ref={header} src="https://placehold.co/600x400" alt="" />
        <br />
        <button onClick={change}>button</button>
        <br />
        <br />
        <input ref={(a)=>firstName=a} type="text" name="" id="" />
        <input ref={(a)=>lastName=a} type="text" name="" id="" />

        <button onClick={inputCl}>submit</button>
    </div>
  )
}

export default LearnHok