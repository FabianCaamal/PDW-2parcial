import React from 'react'
import { useNavigate } from 'react-router'
import { ListItem } from './ListItem'

export const Consumo = () => {

    const navigate = useNavigate()

    return (
        <div className="p-10" >
            <span onClick={ () => navigate('/dashboard') } className="border p-1 rounded hover:bg-red-700 hover:border-transparent cursor-pointer" >
                Atras
            </span>

            <div className="text-center" >
                <h1 className="font-bold text-2xl " >Consumo total de electricidad</h1>
                <h3>Consumo total de electricidad</h3>

                <div className="m-7" >Total: $1,400.00</div>
            </div>

            <div className="md:p-8" >
                <h1>Detalle del consumo</h1>

                <div className="w-full pt-6" >
                    <ListItem name="Sala" money="400" />
                    <ListItem name="Recamara" money="200" />
                    <ListItem name="Cocina" money="800" />
                </div>

            </div>

        </div>
    )
}
