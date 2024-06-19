import express from "express"
import dotenv from "dotenv"
import connect from "./db.js"
import authRoutes from "./routes/auth-routes.js" 
import passportSetup from './config/password-setup.js'
import session from 'express-session';
import passport from "passport"
const app = express()
dotenv.config()

passportSetup(passport)



app.use(express.json())
app.use(
    session({
      secret: 'yourSecretKey21',
      resave: false,
      saveUninitialized: false,
    })
  );
// set view engine
app.set('view engine', 'ejs');

//for testing purpose
app.get('/',(req,res)=>{
    res.render('home')
    res.status(201).json("hello world")
})

app.use('/auth',authRoutes)
app.listen(8000,()=>{
    connect()
    console.log("Server is running on port 8000");
})