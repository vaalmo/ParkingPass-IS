import {Router} from 'express'
import {pool} from '../config.js'

const router = Router();


// consulta de prueba
router.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT * FROM USUARIO');
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


