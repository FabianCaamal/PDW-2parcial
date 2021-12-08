import React from 'react';
import { useNavigate } from 'react-router';
import '../../styles/login.css'

export const Login = ({ history }) => {

    const navigate = useNavigate();

    return (
        <div className="card-login">
            <div className="card">
                <h1 className="font-bold text-2xl" >Login</h1>

                <form className="form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <br />
                    <button className="bg-blue-500" onClick={ () => navigate('dashboard') } >Iniciar sesion</button>
                </form>
            </div>
        </div>
    )
}
