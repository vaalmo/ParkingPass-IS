import {Router} from 'express'
import {pool} from '../db.js'

const router = Router();


// consulta de prueba
router.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0].now);
})

export default router;


