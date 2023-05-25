import bodyParser from 'body-parser';
import { Router } from 'express';
import {validateLoginForm, validateRegisterForm} from '../controllers/auth.controllers.js'
import { pool } from "../config.js"
import bcrypt from 'bcrypt'

let jsonParser = bodyParser.json();
const router = Router();

//rutas



router.post("/register", async (req, res) => {
  validateRegisterForm(req, res);

    const existingUser = await pool.query(
      "SELECT idUsuario from usuario WHERE idUsuario=$1",
      [req.body.username]
    );
  
    if (existingUser.rowCount === 0) {
      // register
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      const newUserQuery = await pool.query(
        "INSERT INTO usuario(idUsuario, tipoUsuario, nombre, apellido, correo, contrasena) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, idUsuario",
        [req.body.username, req.body.usertype, req.body.name, req.body.surname, req.body.email, hashedPass]
      );
      console.log(newUserQuery)
      req.session.user = {
        username: req.body.username,
        id: newUserQuery.rows[0].id,
      };
  
      res.json({ loggedIn: true, username: req.body.username });
    } else {
      res.json({ loggedIn: false, status: "Username taken" });
    }
  });




  router
  .route("/login")
  .get(async (req, res) => {
    if (req.session.user && req.session.user.username) {
      res.json({ loggedIn: true, username: req.session.user.username });
    } else {
      res.json({ loggedIn: false });
    }
  })
  .post(async (req, res) => {
    validateLoginForm(req, res);

    const potentialLogin = await pool.query(
      "SELECT id, idUsuario, contrasena FROM usuario WHERE idUsuario=$1",
      [req.body.username]
    );

    if (potentialLogin.rowCount > 0) {
      const isSamePass = await bcrypt.compare(
        req.body.password,
        potentialLogin.rows[0].contrasena
      );
      if (isSamePass) {
        req.session.user = {
          username: req.body.username,
          id: potentialLogin.rows[0].id,
        };
        res.json({ loggedIn: true, username: req.body.username });
      } else {
        res.json({ loggedIn: false, status: "Contraseña o id incorrectos!" });
        console.log("not good");
      }
    } else {
      console.log("not good");
      res.json({ loggedIn: false, status: "Contraseña o id incorrectos!" });
    }
  });




export default router;

