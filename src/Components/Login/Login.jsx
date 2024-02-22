import React from 'react'
import './Login.css'
const Login = () => {


  return (
    
    <div className="container">
      <div className="inputcontainer">
        <h1 className="heading">Login </h1>

        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button >
          Submit
        </button>
      </div>
    </div>

   
  )
}

export default Login
