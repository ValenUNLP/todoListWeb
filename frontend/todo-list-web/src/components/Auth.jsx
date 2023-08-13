import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

const Auth = () => {
    const [render, setrender] = useState(true)
    const [loginMessage, setloginMessage] = useState("")
    const handleClick = (e) =>{
        if(e.target.id === "registerButton"){
            setrender(true)
        }else{
            setrender(false)
            setloginMessage("");
        }
    }
  return (
    <>
    <div id = "auth">
        <div id="options">
            <button id = "registerButton" onClick={handleClick}>Registrarse </button>
            <button id="loginButton" onClick={handleClick}>Iniciar Sesion </button>    
        </div>
        {render ? <Register setrender={setrender} setloginMessage={setloginMessage}/> : <Login messageText={loginMessage}/>}
    </div>
    </>
  )
}

export default Auth