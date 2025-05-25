import React, { useState } from 'react'

const UseState = () => {

    const [obj, setObj] = useState({
        Fname: 'shanto',
        Lname: 'kumar'
    })

    const change =() => {
        setObj(
            // prevOVJ diye call back function korle ager value theke jay
            prevOBJ => ({ 
                ...prevOBJ,
                Fname: 'das'
            })

        )
    }
    return (
        <div>
            <h1>{obj.Fname}</h1>
            <h1>{obj.Lname}</h1>
            <button onClick={change}> buton</button>
        </div>
    )
}

export default UseState