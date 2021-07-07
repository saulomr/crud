-- Sql ANSI Bd MySql
-- Create a Data Base challenge

-- Drop Data Base if jsut exist
DROP DATABASE challenge;

-- Create a new Data Base
CREATE DATABASE challenge DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

-- Use a Data Base created
USE challenge;

-- Create a table Techbiciab
CREATE TABLE technician (
idTechnician INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT NOT NULL,
name VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(30) NOT NULL,
adress VARCHAR(100) NOT NULL
);

-- Insert in table new values
INSERT INTO `technician` (`idTechnician`, `name`, `phone`, `email`, `adress`)
VALUES ('1', 'Luiz Felipe', '010101', 'luizfelipe@gmail.com', 'Rua 01'), 
('2', 'Alves Ferreira', '020202', 'alvesferreira@gmail.com', 'Rua 02'),
('3', 'Teste', '030303', 'teste@gmail.com', 'Rua 03');

