import bodyParser from 'body-parser';
import { Router } from 'express';
import { pool } from '../config.js';
let jsonParser = bodyParser.json();
const router = Router();


// consulta de prueba
router.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT * FROM usuario');
    console.log('user:', result.rows[0]);
})

router.get("/", (req, res) => {
    res.render('index')
});

router.get("/users/register", (req, res) => {
    res.render('register')
});

router.get("/users/login", (req, res) => {
    res.render('login')
});

router.get("/users/dashboard", (req, res) => {
    res.render('dashboard', { user: "Sebas" });
});

router.get("/tarjeta", (req, res) => {
    res.render('tarjeta');
});

router.post("/tarjeta", jsonParser , (req, res) => {
    const { tipoTarjeta, numeroTarjeta, ccv, nombre } = req.body
    pool.query(
        'INSERT INTO tarjeta (tipoTarjeta, numeroTarjeta, ccv, nombrePropietario) VALUES ($1, $2, $3, $4, $5)',
        [tipoTarjeta, numeroTarjeta, ccv, nombre],
    )
    res.redirect('/')   
    
    
});

//router.post("/users/register", (req, res) => {
//    let {name, email, password, password2 } = req.body;
//
//    console.log({
//        name,
//        email,
//        password,
//        password2
//    })
//})


export default router;


