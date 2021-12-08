import React from 'react'

export const ListItem = ({ name, money }) => {

    return (
        <div className="flex justify-center md:w-3/4 m-2 hover:bg-gray-700 " >
            <div className="m-3">
                <img
                    className="w-16 rounded-3xl"
                    src="https://image.freepik.com/vector-gratis/icono-escena-sala-estar_24877-252.jpg" 
                    alt="sala"
                />
            </div>

            <div className="w-4/5" >
                <div className="flex flex-row justify-between" >
                    <h1 className="mx-5" >{name}:</h1>
                    <p>${money}</p>
                </div>

                <div className="relative pt-4">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div style={{ width: `${ money.substr(0,2) }%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
