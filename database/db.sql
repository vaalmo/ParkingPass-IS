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

CREATE TABLE TARJETA(
    idTarjeta SERIAL PRIMARY KEY,
    tipoTarjeta VARCHAR(30), 
    numeroTarjeta VARCHAR(20) NOT NULL,
    ccv VARCHAR(5) NOT NULL UNIQUE,
    nombrePropietario VARCHAR(20) NOT NULL
);

CREATE TABLE TARJETAUSUARIO(
    idUser varchar(10),
	idTarj varchar(15),
	CONSTRAINT FK_Usuario FOREIGN KEY(idUser) REFERENCES USUARIO(idUsuario),
	CONSTRAINT FK_Tarjeta FOREIGN KEY(idTarj) REFERENCES TARJETA(idTarjeta)
);


INSERT INTO USUARIO (idUsuario, tipoUsuario, nombre, apellido, correo, contrasena, saldo, tiempoActivoParqueadero)
VALUES('1000654928','miembro','Sebastian','Salazar','ssalazar@eafit.edu.co','sebassalazar1','0','0');

