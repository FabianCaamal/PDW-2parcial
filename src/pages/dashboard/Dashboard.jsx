import React from 'react'
import { Category } from './Category'

export const Dashboard = () => {
    return (
        <div className="w-full p-14 " >
            <h1 className="text-center font-bold text-3xl " >Categoria</h1>

            <div className="flex flex-wrap justify-center md:p-14 " >
                <Category name="Mensajes" />
                <Category name="Consumo" />
            </div>

        </div>
    )
}
