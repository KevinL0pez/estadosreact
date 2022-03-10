import '../styles/forms.css'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export const FormLogin = () => {

    const captInicio = (e) => {
        e.preventDefault()
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
                    <button onClick={captInicio}>Iniciar sesión</button>
                </div>
                <div className="linkReg">
                    <NavLink to="/register">¿No tienes una cuenta? Registrate</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}
