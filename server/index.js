//main file

import express from 'express';
import {PORT} from './config.js'

import indexRoutes from './routes/index.routes.js'


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));



app.use(indexRoutes)
app.listen(PORT)

console.log(`Server on port ${PORT}`);








