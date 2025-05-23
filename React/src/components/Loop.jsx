import React from 'react'

const Loop = () => {

    let  items = ['A', 'B', 'C', 'D']
  return (
    <div>
        {/* map loop and why map cz return value */}
       <ul>
        {
            items.map((item,i)=>{
                return <li key={i.toString()}>{item}</li>
            })
        }
       </ul>

    </div>
  )
}

export default Loop