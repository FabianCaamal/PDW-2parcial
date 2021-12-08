import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import '../../styles/listado.css'
import { Agregar } from './Agregar';
import { Card } from './Card'

export const Listado = () => {

    const itemLocal = localStorage.getItem('listado');
    const navigate = useNavigate()

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

    return (
        <div className="p-9" >
            <span onClick={() => navigate('/dashboard') } className="border p-1 rounded hover:bg-red-700 hover:border-transparent cursor-pointer" >
                Atras
            </span>

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
