import bodyParser from 'body-parser';
import { Router } from 'express';
import { pool } from "../config.js";


import { addCard, parqueadero } from '../controllers/paymethods.controllers.js';

let jsonParser = bodyParser.json();
const router = Router();

router.post("/agregarTarjeta", jsonParser, async (req, res) => {
    let { tipo, numero, ccv, nombre } = req.body.data;
    let user = req.body.isAuth.username
    console.log(user);
    const usuario = await pool.query(
        'SELECT id FROM USUARIO WHERE idUsuario = $1', [user]
    )
    var idUsuario = usuario.rows[0].id;

    await pool.query(
        'INSERT INTO TARJETA (tipoTarjeta, numeroTarjeta, ccv, nombrePropietario) VALUES ($1, $2, $3, $4)',
         [tipo, numero, ccv, nombre],
     );
    
     const tarjetaUsuario = await pool.query(
        'SELECT idTarjeta FROM TARJETA WHERE numeroTarjeta = $1', [numero]
     );

    var idTarjeta = tarjetaUsuario.rows[0].idtarjeta;
    await pool.query(
        'INSERT INTO TARJETAUSUARIO (idUser, idTarj) VALUES ($1, $2)', [idUsuario, idTarjeta]
    )

    
});



export default router;

