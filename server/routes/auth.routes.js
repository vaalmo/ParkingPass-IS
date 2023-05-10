import bodyParser from 'body-parser';
import { Router } from 'express';
import {register} from '../controllers/auth.controllers.js'

let jsonParser = bodyParser.json();
const router = Router();

//rutas

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/register",jsonParser, register)

router.get("/register", (req, res) => {
    res.render('register');
});


//router.post("/login",jsonParser, login)

router.get("/login", (req, res) => {
    res.render('login');
});


//router.post("/logout", jsonParser, logout)

router.get("/logout", (req, res) => {
    res.render('logout');
});

export default router;