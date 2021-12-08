import React from 'react'
import { useNavigate } from 'react-router'

export const Category = ({ name }) => {

    const navigate = useNavigate();

    const goPage = () => navigate(`/${ name.toLowerCase() }`)

    return (
        <div onClick={ goPage } className="border rounded p-5 hover:bg-red-700 hover:border-transparent cursor-pointer w-28 m-6">
            <p className="text-center" >{ name }</p>
        </div>
    )
}
