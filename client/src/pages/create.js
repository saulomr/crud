import React, { useState } from "react";
import './App.css';
import Axios from 'axios';

function Insert() {
    var [name, setName] = useState("");
    var [phone, setPhone] = useState("");
    var [email, setEmail] = useState("");
    var [adress, setAdress] = useState("");

    const submitForm = () => {
        Axios.post("http://localhost:3001/api/insert", {
            name: name,
            phone: phone,
            email: email,
            adress: adress,
        }).then((response) => {
            alert("Insertion success!");
        }).catch((error) => {
            alert(error);
        });
        window.location.reload();
    };
    return (
        <div className="App">
            <h1>Insertion Form</h1>

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
                <button className="insert" onClick={submitForm}>Submit</button>
                <a href="/insert"><button className="cancel">Cancel</button></a>
                <a href="/"><button className="search">Return to Home</button></a>


            </div >
        </div >

    );

}

export default Insert;
