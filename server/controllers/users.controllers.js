import { pool } from "../config.js"

//dashboard de usuario (miembro, visitante)
export const dashboard = (req, res) => {
    res.render('dashboard', { user: "Usuario" });
 };
 