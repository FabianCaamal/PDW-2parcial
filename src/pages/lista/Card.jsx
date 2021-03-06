import React from 'react'

export const Card = ({ name, desc, setState, id }) => {

    const eliminar = () => {
        setState(e => e.filter( i => i.id !== id) ) 
    }

    return (
        <div className="target-container">
            <div className="target">
                <img src={ "logo192.png" } width="50" alt="icon" className="icon" />

                <div >
                    <h4 className="text-center" >{ name }</h4>

                    <p>{ desc }</p>

                    <button className="bg-red-600" onClick={() => eliminar() } >eliminar</button>
                </div>
            </div>
        </div>
    )
}
