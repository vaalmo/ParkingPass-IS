import bodyParser from 'body-parser';
import { Router } from 'express';


import { dashboard } from '../controllers/users.controllers.js';
import { checkNotAuthenticated } from '../controllers/auth.controllers.js';


let jsonParser = bodyParser.json();
const router = Router();

router.get("/dashboard", dashboard);


router.get("/dashboard", checkNotAuthenticated, (req, res) => {
    res.render('dashboard');
});


export default router;