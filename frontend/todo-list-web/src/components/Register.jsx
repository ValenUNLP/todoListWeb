import "./Register.css"
import React, { useState } from 'react';
function Register(){

    const [userData, setuserData] = useState({
        name: "",
        username: "",
        password: "",
    })

    const [error, seterror] = useState(null);

    const handleChange = (e) =>{
        let newValue = e.target.value;
        setuserData({
            ...userData,
            [e.target.name]: newValue,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        let name = e.target.name.value;
        let username = e.target.username.value;
        let password = e.target.password.value;

        if(name.length <= 3 || name.length >= 18){
            seterror("El nombre tiene que tener mas de 3 caracteres y menos de 18 caracteres");
            return;
        }

        if(username.length <= 3 || username.length >= 18){
            seterror("El nombre de usuario tiene que tener mas de 3 caracteres y menos de 18 caracteres");
            return;
        }

        if(name.length <= 8 || name.length >= 18){
            seterror("La contraseña tiene que tener mas de 8 caracteres y menos de 18 caracteres");
            return;
        }

        fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then((response) => {
            if(!response.ok){
                throw new Error("Usuario ya registrado. Porfavor pruebe con otro")
            }
            return response.json()
        })
        .then((data) => console.log(data))
        .catch(error => {
            seterror(error.message)
        })
    }


    return(
        <>
        <div id="register">
            <form onSubmit={handleSubmit}>
                <h1>Registro de usuario</h1>
                <div id="register-inputs">
                    <div id="name-input" >
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" id = "name"name="name" onChange={handleChange}/>
                    </div>
                    <div id="username-input">
                        <label htmlFor="username">Nombre de usuario: </label>
                        <input type="text" id = "username"name="username" onChange={handleChange}/>
                    </div>
                    <div id="password-input">
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" id = "password"name="password"onChange={handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Enviar"/>
                    </div>
                </div>
            </form>
                <div id = "register-error" style = {{display: error ? "block" : "none"}}>
                        <p>{error}</p> 
                </div>
        </div>
        </>
    )
}

export default Register;