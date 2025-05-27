import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    let navigate = useNavigate()
    
    const EmailHandel = (e) => {
        setEmail(e.target.value)
    }
    const passHandel = (e) => {
        setPass(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        let data = {
            name:'shanto',
            email:'shantokumar@gmail.com',
            city:'dhaka'
        }
        if(email === 'shantokumar@gmail.com' && pass === '123456'){
            navigate('/profile', {state : data})
        }else{
            alert('not match')
        }
    }
    return (
        <div>
            <h1>User SignIN</h1>
            <form onSubmit={submit}>
                <input onChange={EmailHandel}  placeholder='Name' type="email"   />
                <input onChange={passHandel} placeholder='pass' type="password"   />
                <button type='submit'>signIn</button>
            </form>
        </div>
    )
}

export default Signin