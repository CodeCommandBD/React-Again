import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
 let {state} = useLocation()

  return (
    <div>
      <div className='d-flex flex-column align-items-center p-5 w-75 justify-content-center m-auto shadow-lg mt-5 text-success '>
        <h1 c>User Profile</h1>
        <div className='text-start w-75'>
          <p>Name: { state.name }</p>
          <p>Email: { state.email } </p>
          <p>city: { state.city } </p>
          <p>Hobby: { } </p>

        </div>

      </div>
    </div>
  )
}

export default Profile