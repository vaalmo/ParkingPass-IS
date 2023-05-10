import bodyParser from 'body-parser';
import { pool } from '../config.js';
import bcrypt from 'bcrypt';
//import flash  from 'connect-flash';

let jsonParser = bodyParser.json();

//registro
export const register = (req, res) => {
        const idUsuario = req.body.idUsuario;
        const tipoUsuario = req.body.tipoUsuario;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const contrasena = req.body.contrasena;
      
        const query = 'INSERT INTO public.usuario (idUsuario, tipoUsuario, nombre, apellido, correo, contrasena) VALUES ($1, $2, $3, $4, $5, $6)'
        pool.query(query, [idUsuario, tipoUsuario, nombre, apellido, correo, contrasena],
            (error, results) => {
             if (error) {
                 console.log(error);
                 res.status(500).send('Error registering user');
                } else {
                  res.status(200).send('User registered successfully');
                }
              });
      
          console.log('Usuario registrado')
          res.render('login')
            };





//inicio de sesion

export const login = (req, res) => {
    const idUsuario = req.body.idUsuario;
    const contrasena = req.body.contrasena;

    const query = 'SELECT idUsuario, contrasena FROM public.usuario WHERE idUsuario = $1'
    
}


//dashboard de usuario (miembro, visitante)
//router.get("/dashboard", (req, res) => {
//    res.render('dashboard', { user: "Onofre" });
//});


//export default router;

