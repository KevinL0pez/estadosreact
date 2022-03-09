import React from 'react'
import '../styles/forms.css'

export const FormRegister = () => {
  return (
    <>
      <div className="contenedor">
        <form action="" method="post" className="forms">
          <h1>Registrarse</h1>
            <div className="userForm">
              <hr />
              <p>Nombre de usuario:</p>
              <input type="text" placeholder="Nombre de usuario"/>
              <p>Contraseña:</p>
              <input type="text" placeholder="Contraseña"/>
              <p>Nombre:</p>
              <input type="text" placeholder="Nombre"/>
              <hr />
            </div>
            <div className="btnReg">
              <button method="post">Registarse</button>
            </div>
        </form>
      </div>
    </>
  )
}
