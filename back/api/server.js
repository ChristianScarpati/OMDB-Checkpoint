// server configs
const express = require('express')
const cors = require('cors') 
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const bcrypt = require("bcryptjs")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({origin: 'http://localhost:3000', credentials: true}))

app.use(session({
    secret:'secretcode',
    resave:true,
    saveUninitialized:true,
}))

app.use(cookieParser('secretcode'))
app.use(passport.initialize())
app.use(passport.session())
//require('./passportConfig')(passport)

//-------------------------------------------------------------------------------------------------------------------------
app.use('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'))  //esto es un archivo ESTATICO
})   //la url que ingreses a la base de datos

//inicializo el server

app.listen(3001, ()=> {
    console.log("server On Port 3001")
})



