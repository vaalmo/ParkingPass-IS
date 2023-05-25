//main file

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import { createServer } from "http";
import { Server } from "socket.io";
import { PORT } from './config.js';

dotenv.config()

import authRoutes from './routes/auth.routes.js';
//import usersRoutes from './routes/users.routes.js'
import paymethodsRoutes from './routes/paymethods.routes.js';


const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true"
  }
})


app.use(helmet());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use(express.json())
app.use(session({
  secret: "secret",
  credentials: true,
  name: "sid",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
    httpOnly: true,
    expires: 1000 * 60 * 60 * 24 * 7,
    sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
  },
}))

app.use(bodyParser.json())

app.use("/auth", authRoutes)
//app.use(usersRoutes)
app.use("/paymethods", paymethodsRoutes)

io.on("connect", socket => {})

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})










