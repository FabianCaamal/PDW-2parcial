import React from 'react';
import logo from '../logo.svg';
import '../styles/splash.css'

export const Splash = () => {
    return (
        <div className="App">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{ textAlign: 'center' }} > PWA - Tarea </p>
            </div>
        </div>
    )
}
