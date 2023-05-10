import bodyParser from 'body-parser';
import { Router } from 'express';


import { addCard, parqueadero } from '../controllers/paymethods.controllers.js';

let jsonParser = bodyParser.json();
const router = Router();

router.post("/agregarTarjeta", jsonParser , addCard)

router.get("/agregarTarjeta", (req, res) => {
    res.render('tarjeta');
});

router.get("/parqueadero", parqueadero);

export default router;

