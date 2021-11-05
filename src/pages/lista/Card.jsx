import React from 'react'
import logo from '../../logo.svg';

export const Card = ({ name, desc, setState, id }) => {

    const eliminar = () => {
        setState(e => e.filter( i => i.id !== id) ) 
    }

    return (
        <div className="target-container">
            <div className="target">
                <img src={ logo } alt="icon" className="icon" />

                <div>
                    <h4>{ name }</h4>

                    <p>{ desc }</p>

                    <button onClick={() => eliminar() } >eliminar</button>
                </div>
            </div>
        </div>
    )
}