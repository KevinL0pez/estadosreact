import React, {useState, useEffect} from 'react'
import '../styles/forms.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export const FormRegister = () => {

  const [validaciones,setValidaciones] = useState(true);

  const captInicio = (e) => {
    e.preventDefault()
    const campoNombre = document.getElementById('user_name').value
    const campoContraseña = document.getElementById('pass_word').value
    const campoUsuario = document.getElementById('name_user').value
    // console.log(campoNombre)
    // console.log(campoContraseña)

    axios.post('https://backend-edw.herokuapp.com/usuario',{
      "username" : campoNombre,
      "password" : campoContraseña,
      "name" : campoUsuario,
  }).then((response) => {
      console.log(response);
      console.log("Usuario Registrado")
      
  }). catch((error) => {
      console.log(error)
  })
  }

  const validacion = () => {

    const campoNombre = document.getElementById('user_name').value
    const campoContraseña = document.getElementById('pass_word').value
    const campoUsuario = document.getElementById('name_user').value

    if(campoNombre == "") {
      console.log("No se pudo completar el registro, debe ingresar un dato en el campo nombre")
    } else if(campoContraseña == ""){
      console.log("No se pudo completar el registro, debe ingresar un dato en el campo contraseña")
    } else if(campoUsuario == ""){
      console.log("No se pudo completar el registro, debe ingresar un dato en el campo usuario")
    }else {
        setValidaciones(false)
       
        captInicio()
    }

  }

  return (
    <>
      <div className="contenedor">
        <form method="post" className="forms">
          <h1>Registrarse</h1>
            <div className="userForm">
              <hr />
              <p>Nombre de usuario:</p>
              <input type="text" placeholder="Nombre de usuario" id="user_name"/>
              <p>Contraseña:</p>
              <input type="password" placeholder="Contraseña"  id="pass_word"/>
              <p>Nombre:</p>
              <input type="text" placeholder="Nombre"  id="name_user"/>
              <hr />
            </div>
            <div className="btnReg">
              {validaciones ? <NavLink to="/register"><button onClick={validacion}>Registarse</button></NavLink> : <NavLink to="/login"><button onClick={validacion}>Registarse</button></NavLink>}
            </div>
        </form>
      </div>
    </>
  )
}
