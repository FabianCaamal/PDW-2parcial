import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Listado } from '../pages/lista/Listado'
import { Login } from '../pages/login/Login'

export const Routes = () => {
    return (
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/" element={ <Login /> } />
                <Route exact path="/lista" element={ <Listado /> } />
            </Switch>

        </BrowserRouter>
    )
}
