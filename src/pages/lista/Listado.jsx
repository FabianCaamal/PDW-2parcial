import React, { useEffect, useState } from 'react'
import '../../styles/listado.css'
import { Agregar } from './Agregar';
import { Card } from './Card'

export const Listado = () => {

    const itemLocal = localStorage.getItem('listado');

    let initalState = [
        {
            id: 43,
            nombre: 'Fabian',
            desc: 'cita el lunes'
        },
        {
            id: 23,
            nombre: 'Maritza',
            desc: 'entregar reporte'
        },
        {
            id: 87,
            nombre: 'Manuel',
            desc: 'mandar conclucion'
        },
        {
            id: 98,
            nombre: 'Mario',
            desc: 'hacer el reporte'
        },
    ]
    
    const [initial, setInitial] = useState(() => {
        if(itemLocal) {
            return JSON.parse(itemLocal)
        } else {
            localStorage.setItem('listado', JSON.stringify(initalState))

            return initalState;
        }
    });

    useEffect(() => {
        localStorage.setItem('listado', JSON.stringify(initial))
    }, [ initial ])

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: 45 }} >Contactos</h1> 

            <Agregar newState={setInitial} />

            <div className="listado">
                {
                    initial.map( (item) => (
                        <Card 
                            key={item.id} 
                            id={item.id}
                            name={item.nombre} 
                            desc={item.desc}
                            setState={ setInitial }
                        /> 
                    ))
                }
            </div>
        </div>
    )
}
