import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/index.js';
import Contato from './pages/contato.js';
import Insert from './pages/create.js';
import ShowAll from './pages/showAll.js';
import Search from './pages/search.js';
import SearchResult from './pages/searchResult.js';
import Test from './pages/test.js';

function App() {
    return (
        <Router>
            <div>
                <Route path='/' exact component={Main} />
                <Route path='/contato' component={Contato} />
                <Route path='/insert' component={Insert} />
                <Route path='/showAll' component={ShowAll} />
                <Route path='/search' component={Search} />
                <Route path='/searchResult*' component={SearchResult} />
                <Route path='/test' component={Test} />
            </div>
        </Router>
    
 );

}

export default App;
