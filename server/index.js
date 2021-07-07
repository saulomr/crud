const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const connection = mysql.createPool({
    host: 'localhost',
    user: 'saulo',
    password: '12345',
    database: 'challenge'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/api/getAll", (req, res) => {
    const sqlRead = "SELECT * FROM technician ORDER BY `technician`.`name` ASC";
    connection.query(sqlRead, (err, result) => {
        if (!err) {
            res.send(result);
            console.log("Success get all!");
        }
        else {
            console.log(name + err);
        }
    });
});

app.post('/api/insert', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const adress = req.body.adress;
    const sqlCreate = "INSERT INTO `technician`(`name`, `phone`, `email`, `adress`) VALUES(?,?,?,?)";
    connection.query(sqlCreate, [name, phone, email, adress], (err, result) => {
        if (!err) {
            res.send("Success in insert!");
            console.log("Success in insert!");
        } else {
            console.log(err);
        }
    });
});


app.get("/api/get/:name", (req, res) => {
    const name = req.params.name;
    const sqlRead = "SELECT * FROM `technician` WHERE `technician`.`name` = ?";
    connection.query(sqlRead, name, (err, result) => {
        if (!err) {
            res.send(result);
            console.log("Success get one technician!");
        }
        else {
            console.log(name + err);
        }
    });
});

app.delete("/api/delete/:name", (req, res) => {
    const name = req.params.name;
    const sqlDelet = "DELETE FROM `technician` WHERE `technician`.`name` = ? ";
    connection.query(sqlDelet, name, (err, result) => {
        if (!err) {
            res.send("Success in delete!");
            console.log("Success in delete!");
        }
        else {
            console.log(name + err);
        }
    });
});

app.put("/api/update", (req, res) => {
    const oldName = req.body.oldName;
    const newName = req.body.newName;
    const phone = req.body.phone;
    const email = req.body.email;
    const adress = req.body.adress;
    const sqlUpdate = "UPDATE `technician` SET  `name` = ?, `phone` = ?, `email` = ?, `adress` = ? WHERE `technician`.`name` = ? ";
    connection.query(sqlUpdate, [newName, phone, email, adress, oldName], (err, result) => {
        if (!err) {
            res.send("Success in update!");
            console.log("Success in update!!");
        }
        else {
            console.log(name + err);
        }
    });
});

app.listen(3001, () => {
    console.log("funcionando na porta 3001");
});
