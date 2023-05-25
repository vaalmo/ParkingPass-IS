CREATE DATABASE parkingpass;

CREATE TABLE USUARIO(
    id SERIAL PRIMARY KEY NOT NULL,
    idUsuario VARCHAR(15) NOT NULL UNIQUE,
    tipoUsuario VARCHAR(15),
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NULL,
    correo VARCHAR(200) NOT NULL,
    contrasena VARCHAR(200) NOT NULL,
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
	CONSTRAINT FK_Usuario FOREIGN KEY(idUser) REFERENCES USUARIO(id),
	CONSTRAINT FK_Tarjeta FOREIGN KEY(idTarj) REFERENCES TARJETA(id)
);

CREATE TABLE PARQUEADERO(
    idPark VARCHAR(15) PRIMARY KEY NOT NULL,
    celdasCarro INTEGER,
    celdasMoto INTEGER,
    celdasOcupadasCarro INTEGER,
    celdasOcupadasMotos INTEGER,
    tarifaMotos INTEGER,
    tarifaCarro INTEGER
);

CREATE TABLE PARQUEADERO(
    idPark VARCHAR(15) PRIMARY KEY NOT NULL,
    celdasCarro INTEGER,
    celdasMoto INTEGER,
    celdasOcupadasCarro INTEGER,
    celdasOcupadasMotos INTEGER,
    tarifaMotos INTEGER,
    tarifaCarro INTEGER
);


INSERT INTO USUARIO (idUsuario, tipoUsuario, nombre, apellido, correo, contrasena, saldo, tiempoActivoParqueadero)
VALUES('1000654928','miembro','Sebastian','Salazar','ssalazar@eafit.edu.co','sebassalazar1','0','0');

INSERT INTO PARQUEADERO (idPark, celdasCarro, celdasMoto, celdasOcupadasCarro, celdasOcupadasMotos, tarifaCarro, tarifaMotos)
VALUES('Guayabos', '350', '50', '300', '40', '5000', '3000');

INSERT INTO PARQUEADERO (idPark, celdasCarro, celdasMoto, celdasOcupadasCarro, celdasOcupadasMotos, tarifaCarro, tarifaMotos)
VALUES('Ingenierias', '400', '150', '200', '120', '5000', '3000');