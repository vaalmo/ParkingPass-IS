import { pool } from "../config.js"

export const dashboard = (req, res) => {
    res.render('dashboard')
}

//res.render('dashboard', { user: req.user.nombre })