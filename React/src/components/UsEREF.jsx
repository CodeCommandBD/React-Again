import React, { useRef } from 'react'

const UsEREF = () => {

  let change = useRef();

  const clickChange = () => {
    change.current.classList.remove('text-success')
    change.current.classList.add('text-danger')
  }

  return (
    <div>
        <h1 className='text-success ' ref={change}>this is red</h1>
        <button onClick={clickChange}>click</button>
    </div>
  )
}

export default UsEREF