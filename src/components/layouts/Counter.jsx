import React, { useState, useEffect } from 'react';
import { Perfil } from '../UI/images/Perfil';
import '../styles/Images.css'
import perfil from '../../assets/image/perfil.jpg'

export default function Counter () {
    const [contador, setContador] = useState(0)
    
    const sumar = () => setContador(contador + 1)
    const reset = () => setContador(0)
    const restar = () => setContador(contador - 1)
    console.log(useState())

    useEffect( () => {
        const img = document.getElementById('filterimg')
        if (contador >= 5) {
            img.classList.remove('inactiveimg')
            img.classList.add('activeimg')
        } else if (contador < 0){
            img.classList.remove('activeimg')
            img.classList.add('changeimg')
        } else if (contador=== 0){
            img.classList.remove('changeimg')
            img.classList.remove('activeimg')
            img.classList.remove('inactiveimg')
        } 

    }, [contador])

    return (
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={restar}> - </button>
                <button onClick={reset}> Reset </button>
                <button onClick={sumar}> + </button>
                {false&&<button >Hola</button>}
                
            </nav>
            <h3>{contador}</h3>
        </>
    )
}


    // contador es el valor
    // setContador es la función
    // Destructuring en JS
    // Operador ternario
    // Logical AND (&&)
    // Conditional render
    // &&