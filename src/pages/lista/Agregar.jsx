import React, { useState } from 'react';
import '../../styles/agregar.css'

export const Agregar = ({ newState }) => {

    const initialState = {
        id: new Date().getMilliseconds(),
        nombre: '',
        desc: ''
    }

    const [state, setState] = useState(initialState);

    const { nombre, desc } = state;

    const handleForm = (e) => {
        e.preventDefault();

        newState(e => [...e, state])

        setState(initialState)
    }

    const handleInput = ({ target }) => {
        setState({ ...state, [target.name]: target.value })
    }

    return (
        <div className="agregar">
            <form onSubmit={ handleForm } className="agregar-form" >

                <input onChange={handleInput} value={nombre} type="text" required placeholder="Para..." name="nombre" />
                <input onChange={handleInput} value={desc} type="text" required name="desc" placeholder="Asunto"  />

                <button className="bg-green-500 p-1 rounded" >agregar</button>
            </form>
        </div>
    )
}
