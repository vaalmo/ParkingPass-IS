import bodyParser from 'body-parser';
import { Router } from 'express';
import { pool } from "../config.js";


import { addCard, parqueadero } from '../controllers/paymethods.controllers.js';

let jsonParser = bodyParser.json();
const router = Router();

router.post("/agregarTarjeta", jsonParser, (req, res) => {
    let { tipo, numero, ccv, nombre } = req.body.data;
     pool.query(
        'INSERT INTO tarjeta (tipoTarjeta, numeroTarjeta, ccv, nombrePropietario) VALUES ($1, $2, $3, $4)',
         [tipo, numero, ccv, nombre],
     ) .then( () => {
        res.status(201).json({
            message: 'Tarjeta agregada'
        })
     })

});

router.get("/parqueadero", parqueadero);

export default router;

