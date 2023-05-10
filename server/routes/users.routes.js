import bodyParser from 'body-parser';
import { Router } from 'express';


import { dashboard } from '../controllers/users.controllers.js';


let jsonParser = bodyParser.json();
const router = Router();

router.get("/dashboard", dashboard);

export default router;