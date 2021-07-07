import React from "react";
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>Welcome to Application</h1>
            <a href="/insert"><button className="insert">Insert Technician</button></a>
            <a href="/search"><button className="search">Search for Technician</button></a>
            <a href="/showAll"><button className="cancel">Show All Technician</button></a>
        </div>
    );

}

export default App;
