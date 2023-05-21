import bodyParser from 'body-parser';
import { pool } from '../config.js';
import bcrypt from 'bcrypt';
import Yup from 'yup';


let jsonParser = bodyParser.json();


const RegisterFormSchema = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long!"),
  usertype: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long!"),
  name: Yup.string()
    .required("Password required")
    .min(6, "Password too short")
    .max(28, "Password too long!"),
  surname: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long!"),
  email: Yup.string()
    .required("Password required")
    .min(6, "Password too short")
    .max(28, "Password too long!"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password too short")
    .max(28, "Password too long!"),
});

export const validateRegisterForm = (req, res) => {
  const formData = req.body;
  RegisterFormSchema
    .validate(formData)
    .catch(err => {
      //res.status(422).send();
      console.log(err.errors);
    })
    .then(valid => {
      if (valid) {
        console.log("form is good");
      }
    });
};


const LoginFormSchema = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long!"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password too short")
    .max(28, "Password too long!"),
});

export const validateLoginForm = (req, res) => {
  const formData = req.body;
  LoginFormSchema
    .validate(formData)
    .catch(err => {
      //res.status(422).send();
      console.log(err.errors);
    })
    .then(valid => {
      if (valid) {
        console.log("form is good");
      }
    });
};



