import '../styles/forms.css'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const FormLogin = () => {

    // axios.post('https://backend-edw.herokuapp.com/login',{
    //     "username" : document.getElementById('username').value,
    //     "password" : document.getElementById('password').value
    // }).then((respuesta) => {
    //     console.log(respuesta);
    //     if(respuesta.data.length > 20) {
    //         console.log("Logueo Exitoso")
    //         setRuta(false)
    //     } else {
    //         console.log("Error")
    //         setRuta(true)
    //     }
    // }). catch((error) => {
    //     console.log(error)
    // })

    useEffect(() => {
        window.addEventListener("keypress", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault()
            }
        }, false)
    }, [])

  return (
    <>
        <div className="contenedor">
            <form method="get" methot="get" className="forms">
                <h1>Iniciar Sesión</h1>
                <div className="userForm">
                    <hr />
                    <p>Nombre de usuario:</p>
                    <input type="text" id="username" placeholder="Nombre de usuario"/>
                    <p>Contraseña:</p>
                    <input type="text" id="password" placeholder="Contraseña"/>
                    <hr />
                </div>
                <div className="btnLog">
                    <button method="post">Iniciar sesión</button>
                </div>
                <div className="linkReg">
                    <NavLink to="/register">¿No tienes una cuenta? Registrate</NavLink>
                </div>
            </form>
        </div>
    </>
  )
}
