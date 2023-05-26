import { pool } from "../config.js"

// agregar tarjeta de credito o debito
export const addCard = (req, res) => {
    const { tipoTarjeta, numeroTarjeta, ccv, nombre } = req.body
    pool.query(
       'INSERT INTO tarjeta (tipoTarjeta, numeroTarjeta, ccv, nombrePropietario) VALUES ($1, $2, $3, $4, $5)',
        [tipoTarjeta, numeroTarjeta, ccv, nombre],
    )
    res.render('/')
}


//consultar tarifa calculada
export const parqueadero = async (req, res) => {
    const result = await pool.query('select * from parqueadero');
    const rows = result.rows
    res.json(rows);
};

export const saldo = async (req, res) => {
    const idusuario = req.params.idusuario;
    const result = await pool.query('SELECT saldo FROM usuario WHERE idusuario = $1', [idusuario]);
    const row = result.rows;
    res.json(row[0]);
  };