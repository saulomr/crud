const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'saulo',
    password: '12345',
    database: 'challenge'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

var create = "INSERT INTO `technician`(`idTechnician`, `name`, `phone`, `email`, `adress`) VALUES('4', 'NodeJS', '040404', 'nodejs@gmail.com', 'Rua 04')" ;
var read = "SELECT * FROM technician";
var update = "UPDATE `technician` SET `name` = 'LUIZ FELIPE ALVES FERREIRA' WHERE `technician`.`idTechnician` = 4;";
var delet = "DELETE FROM `technician` WHERE `technician`.`idTechnician` = 4";

connection.query(create, function (err, rows, fields) {
    if (!err) {
        console.log('Valores inseridos.\n');
    }
    else {
        console.log('Erro ao cadastrar tecnico.\n');
    }

});

connection.query(read, function (err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    }
    else {
        console.log('Erro ao realizar a consulta.\n');
    }

});

connection.query(update, function (err, rows, fields) {
    if (!err) {
        console.log('Dados do tecnico alterados.\n');
    }
    else {
        console.log('Erro ao alterar dados do tecnico.\n');
    }

});

connection.query(read, function (err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    }
    else {
        console.log('Erro ao realizar a consulta.\n');
    }

});

connection.query(delet, function (err, rows, fields) {
    if (!err) {
        console.log('Valores apagados.\n');
    }
    else {
        console.log('Erro ao deletar tecnico.\n');
    }

});

connection.query(read, function (err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    }
    else {
        console.log('Erro ao realizar a consulta.');
    }

});
