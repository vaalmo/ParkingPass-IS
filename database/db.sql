CREATE DATABASE parkingpass;

CREATE TABLE USUARIO(
    idUsuario VARCHAR(15) PRIMARY KEY NOT NULL,
    tipoUsuario VARCHAR(15), 
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NULL,
    correo VARCHAR(200) NOT NULL UNIQUE,
    contrasena VARCHAR(30) NOT NULL,
    saldo INTEGER,
    tiempoActivoParqueadero INTEGER
);




