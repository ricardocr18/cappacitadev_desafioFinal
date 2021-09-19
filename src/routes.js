//Arquivo responsavel para realizar nossas rotas
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login from './pages/login/Home';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;