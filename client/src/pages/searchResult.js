import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';
import Search from './search.js'


function SearchResult() {
    var [name, setName] = useState("");
    var [techList, setTechList] = useState([]);

    const technician = window.location.href;
    alert(technician);

    techList = [];
    name = "";

    useEffect(() => {
        //        Axios.get("http://localhost:3001/api/get/31").then((response) => {
        const url = `http://localhost:3001/api/get/${technician}`;
        Axios.get(url).then((response) => {
            setTechList(response.data);
        });
    }, []);

    const deleteTechnician = (technician) => {
        const url = `http://localhost:3001/api/delete/${technician}`;
        Axios.delete(url);
        window.location.reload();
    };

    const submitForm = () => {
    };

    return (
        <div className="App">
            <h1>SearchResult Technician</h1>
            <form action="/searchResult" method="POST" className="form">
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => {
                    setName(e.target.value)
                }} />

                {techList.map((val, index) => {
                    return (
                        <h1 key={index}>Name: { val.name}
                        </h1>
                    );
                })
                }
                <button className="insert" type="submit">Submit</button>
            </form >
            <a href="/"><button className="search">Return to Home</button></a>
            <button className="cancel" onClick={() => { deleteTechnician(name) }}>Delete</button>
        </div >
    );
}

export default SearchResult;
