import { pool } from '../config.js';
import bcrypt from "bcrypt";


// este controlador de autenticacion incluye el endpoint de registro y login

export const gregister = (req,res) => {
    //Verificamos si el usuario ya existe
    const query = "SELECT * FROM usuario WHERE idUsuario = ? OR correo = ?"

    pool.query(query, [req.body.idUsuario, req.body.correo], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("El usuario ya existe");

        //Encriptar la contrasena y crear el usuario
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.contrasena, salt);

        const query = "INSERT INTO usuario(`idUsuario`, `tipoUsuario`, `nombre`, `apellido`, `correo`, `contrasena`) VALUES (?)"
        const values = [
            req.body.idUsuario,
            req.body.tipoUsuario,
            req.body.nombre,
            req.body.apellido,
            req.body.correo,
            hash,
        ]

        pool.query(query, [values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Usuario registrado con éxito!");
        })
    })
}  

// login endpoint
export const glogin = (req,res) => {
    
}


export const glogout = (req,res) => {
    
}