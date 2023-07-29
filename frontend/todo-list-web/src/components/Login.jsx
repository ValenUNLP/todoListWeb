import React, { useEffect, useState } from 'react'

function Login({messageText}) {
    const [message, setmessage] = useState(null);
    const [userData, setuserData] = useState({
        username: "",
        password: "",
    })

    const [token, settoken] = useState("")

    useEffect(() => {
      setmessage(messageText)
    }, [messageText])
    

    const handleChange = (e) =>{
        let newValue = e.target.value;
        setuserData({
            ...userData,
            [e.target.name]: newValue,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        let username = e.target.username.value;
        let password = e.target.password.value;

        if(username.length <= 3 || username.length >= 18){
            setmessage("El nombre de usuario tiene que tener mas de 3 caracteres y menos de 18 caracteres");
            return;
        }

        if(password.length <= 8 || password.length >= 18){
            setmessage("La contraseña tiene que tener mas de 8 caracteres y menos de 18 caracteres");
            return;
        }

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then((response) => {
            if(!response.ok){
                throw new Error("Usuario no registrado. Porfavor pruebe con otro")
            }
            return response.json()
        })
        .then((data) => {
            console.log(data)
            settoken(data.token);
        })
        .catch(error => {
            setmessage(error.message)
        })


    }

  return (
    <div id = "login">
        <h1>Iniciar sesion</h1>
        <form  onSubmit={handleSubmit}>
            <div id = "login-inputs">
                <div id = "username-input">
                    <label htmlFor="username-login">Nombre de usuario: </label>
                    <input type="text" id="username-login" name="username" onChange={handleChange} />
                </div>
                <div id = "password-input">
                    <label htmlFor="password-login">Contraseña: </label>
                    <input type="password" id="password-login" name="password" onChange={handleChange} />
                </div>
            </div>
            <input type="submit" value="Login" />
            <div id="message" style={{dysplay : message ? "block" : "none"}}>
                <p>{message}</p>
            </div>
        </form>
    </div>
  )
}

export default Login