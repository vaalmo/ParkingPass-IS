CREATE DATABASE parkingpass;

CREATE TABLE USUARIO(
    idUsuario SERIAL PRIMARY KEY,
    tipoUsuario VARCHAR(15), 
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    correo VARCHAR(50),
    contrasena VARCHAR(30),
    saldo VARCHAR(50),
    tiempoActivoParqueadero INT(30)
);




