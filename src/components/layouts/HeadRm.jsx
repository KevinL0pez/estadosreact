import React, { useState, useEffect }from 'react'
import '../styles/rickmorty.css'

export const HeadRm = () => {

    const [personajes, setPersonaje] = useState([])
    const [nombre, setNombre] = useState([])

    const url = 'https://rickandmortyapi.com/api/character/?name='
    const urlModificada=url+nombre

    const fetchApi=(urlModificada)=>{
        fetch(urlModificada)
        .then(response=> response.json())
        .then(data => setPersonaje(data.results))
    }

    const mostrar = (evento) => {
        
        setNombre(evento.target.value)
        if (evento.keyCode == "") {
            fetchApi(urlModificada)
        }
    }

    return (
        <>
            <h2>Personajes de Rick and Morty</h2>
            <input type="text" id="input" onKeyPress={mostrar} placeholder="Busca un persona"/>
            <div className="contenedor">
                {personajes.map((item, key)=>{
                    return (
                        <div key={key} className="pjs">
                            <h1>{item.name}</h1>
                            <img src={item.image} alt={item.name} />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
