import React, { useState, useEffect } from 'react';
import perfil from '../../assets/image/perfil.jpg'
import '../styles/Images.css'

export const EstadosHead = () => {

    const [estados, setEstados] = useState(true)

    const visualizar = () => setEstados(true)
    const esconder = () => setEstados(false)

    useEffect(() => {
        const img1 = document.getElementById('statusimg1')
        const img2 = document.getElementById('statusimg2')
        const btn1 = document.getElementById('statusbtn1')
        const btn2 = document.getElementById('statusbtn2')

        if (estados === true) {
            img1.classList.remove('changeimg')
            img1.classList.add('activeimg')
            img2.classList.remove('changeimg')
            img2.classList.add('activeimg')

            // btn1.classList.remove('filtbtnact')
            // btn1.classList.add('filtbtn')
            // btn2.classList.remove('filtbtnact')
            // btn2.classList.add('filtbtn')
            
        } else {
            img1.classList.add('changeimg')
            img1.classList.remove('activeimg')
            img2.classList.add('changeimg')
            img2.classList.remove('activeimg')
            
            // btn1.classList.add('filtbtnact')
            // btn1.classList.remove('filtbtn')
            // btn2.classList.add('filtbtnact')
            // btn2.classList.remove('filtbtn')
        }

    }, [estados])

  return (
    <>
        <div>
            <div className="filtimgs">
                <img src={perfil} alt="" id="statusimg1"/>
                <img src={perfil} alt="" id="statusimg2"/>
            </div>
            <div className="filtbtnact">
                {estados === false &&<button onClick={visualizar} id="statusbtn1">Habilitar</button>}
                {estados && <button onClick={esconder} id="statusbtn2">Deshabilitar</button>}
            </div>
        </div>
    </>
  )
}
