import express from "express";
import config from "./config.js";
import indexRouter from "./routes/app.routes.js"
import cors from 'cors'


const app = express(); 

// Settings
app.set('port', config.port)

//Cors
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET, PUT, POST, DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/api/v1', indexRouter);
// app.use('/api/CRUD',crud);


export default app;