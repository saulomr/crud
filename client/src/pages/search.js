import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

var oldName;

function Search() {
    var [name, setName] = useState("");
    var [phone, setPhone] = useState("");
    var [email, setEmail] = useState("");
    var [adress, setAdress] = useState("");
    var [techList, setTechList] = useState([]);
    useEffect(() => {
        name = name + name;
        const url = `http://localhost:3001/api/get/${name}`;
        Axios.get(url).then((response) => {
            setTechList(response.data);
        });
    }, []);


    const updateTechnician = (technician) => {
        const url = "http://localhost:3001/api/update";
        Axios.put(url, {
            newName: name,
            oldName: technician,
            phone: phone,
            email: email,
            adress: adress,
        }).then((response) => {
            alert("Update  success!");
        }).catch((error) => {
            alert(error);
        });
        window.location.reload();
    };

    const deleteTechnician = (technician) => {
        const url = `http://localhost:3001/api/delete/${technician}`;
        Axios.delete(url).then((response) => {
            alert("Delerte success!");
        }).catch((error) => {
            alert(error);
        });
        window.location.reload();
    };

    const submitForm = () => {
        oldName = name;
        const url = `http://localhost:3001/api/get/${name}`;
        Axios.get(url).then((response) => {
            setTechList(response.data);
        });
    };
    if (techList.length == 0) {
        return (
            <div className="App">
                <h1>Search Technician is null</h1>
                <div className="form">
                    <label>Name</label>
                    <input required type="text" name="name" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <button className="insert" onClick={submitForm}>Search</button>
                </div >
                <a href="/"><button className="search">Return to Home</button></a><br />
            </div >
        );
    }
    else {
        return (
            <div className="App">
                <h1>Search Technician IS NOT NULL</h1>
                <div className="form">
                    <label>Name</label>
                    <input type="text" name="name" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <label>Phone</label>
                    <input type="text" phone="phone" onChange={(e) => {
                        setPhone(e.target.value)
                    }} />
                    <label>Email</label>
                    <input type="text" email="email" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <label>Address</label>
                    <input type="text" address="adress" onChange={(e) => {
                        setAdress(e.target.value)
                    }} />

                    {techList.map((val, index) => {
                        return (
                            <div key={index}>
                            Name: { val.name} /
                            Pone: {val.phone} /
                            Email: {val.email} /
                            Adress: {val.adress}
                            </div>
                        );
                    })
                    }
                    <button className="insert" onClick={submitForm}>Search</button>
                </div >
                <button className="update" onClick={() => { updateTechnician(oldName) }}>Update</button><br />
                <button className="cancel" onClick={() => { deleteTechnician(name) }}>Delete</button><br />
                <a href="/"><button className="search">Return to Home</button></a><br />
            </div >
        );
    }
}

export default Search;
