import React, { useState } from 'react'

const ToDo = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    const AddtoList = () =>{
        list.push(item)
        setList([...list])
    }

    const Remove = (index) =>{
        list.splice(index,1)
        setList([...list])
    }

  return (
    <div>
        <ul>
            {
                list.length !== 0 ? (
                    list.map((element, index)=>{
                       return <li>{element}
                            <button onClick={()=>Remove(index)}>Remove</button>
                        </li>
                    })
                ) : (<li></li>)
            }
        </ul>
        <input onChange={(e)=>setItem(e.target.value)} type="text" name="" id="" />
        <button onClick={AddtoList}>ADD</button>
    </div>
  )
}

export default ToDo