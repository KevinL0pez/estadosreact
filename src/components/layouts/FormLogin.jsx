import '../styles/forms.css'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export const FormLogin = () => {

    const [validaciones, setValidaciones] = useState(true)

    const captInicio = () => {
        // event.preventDefault()
        const campoNombre = document.getElementById('username').value
        const campoContraseña = document.getElementById('password').value
        // console.log(campoNombre)
        // console.log(campoContraseña)

        axios.post('https://backend-edw.herokuapp.com/login',{
        "username" : campoNombre,
        "password" : campoContraseña
    }).then((response) => {
        console.log(response);
        if(response.data.length > 20) {
            console.log("Inicio de Sesión Exitoso")
           
        } else {
            console.log("Error de Logueo")
            
        }
    }). catch((error) => {
        console.log(error)
    })
    }

    const validacion = () => {
        const campoContraseña = document.getElementById('password').value
        const campoUsuario = document.getElementById('username').value
    
        if (campoUsuario == ""){
          console.log("Debe ingresar algún date en el campo nombre de usuario")
        } else if (campoContraseña == ""){
          console.log("Debe ingresar algún date en el campo contraseña")
        } else {
            setValidaciones(false)
            captInicio()
        }
    
    }


    useEffect(() => {
        window.addEventListener("keypress", function (event) {
            if (event.keyCode == 13) {
                event.preventDefault()
            }
        }, false)
    }, [])

  return (
    <>
        <div className="contenedor">
            <form method="get" className="forms">
                <h1>Iniciar Sesión</h1>
                <div className="userForm">
                    <hr />
                    <p>Nombre de usuario:</p>
                    <input type="text" id="username" name="user_name" placeholder="Nombre de usuario"/>
                    <p>Contraseña:</p>
                    <input type="password" id="password" name="user_password" placeholder="Contraseña"/>
                    <hr />
                </div>
                <div className="btnLog">
                    {validaciones ? <NavLink to="/login"><button onClick={validacion}>Iniciar sesión</button></NavLink> : <NavLink to="/register"><button onClick={validacion}>Iniciar sesión</button></NavLink>}
                </div>
                <div className="linkReg">
                    <NavLink to="/register">¿No tienes una cuenta? Registrate</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}
