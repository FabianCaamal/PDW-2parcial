import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Consumo } from '../pages/consumo/Consumo'

import { Dashboard } from '../pages/dashboard/Dashboard'
import { Listado } from '../pages/lista/Listado'
import { Login } from '../pages/login/Login'

export const Routes = () => {
    return (
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/" element={ <Login /> } />
                <Route exact path="/dashboard" element={ <Dashboard /> } />
                <Route exact path="/mensajes" element={ <Listado /> } />
                <Route exact path="/consumo" element={ <Consumo /> } />
            </Switch>

        </BrowserRouter>
    )
}
