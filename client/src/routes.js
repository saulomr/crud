import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import Insert from './pages/Insert';
import Main from './pages/Main';
import Contato from './pages/Contato';

function Routs() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Main} />
                <Route path='/contato' component={Contato} />
            </Switch>
        </BrowserRouter>

        );
};

export default Route;