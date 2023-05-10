//main file

import bodyParser from 'body-parser';
import express from 'express';
import {PORT} from './config.js'

import session from 'express-session'
import flash from 'connect-flash'

import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/users.routes.js'
import paymethodsRoutes from './routes/paymethods.routes.js'



const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false
    })
  );

//app.use(indexRoutes)
app.use(express.json())

app.use(authRoutes)
app.use(usersRoutes)
app.use(paymethodsRoutes)

app.listen(PORT)
app.use(flash());
console.log(`Server on port ${PORT}`);








