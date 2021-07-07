import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';


function ShowAll() {
    const [techList, setTechList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getAll").then((response) => {
            setTechList(response.data);
        });
    }, []);

    return (
        <div className="App">
            <h1>Tecnicos Cadastrados</h1>

            <div className="form">
                {techList.map((val, index) => {
                    return (
                        <h2 key={index}>
                            Name: { val.name} / 
                            Pone: {val.phone} /
                            Email: {val.email} /
                            Adress: {val.adress}
                        </h2> 
                    );
                })
                }
            </div >
            <a href="/"><button className="search">Return to Home</button></a>
        </div >

    );

}

export default ShowAll;
