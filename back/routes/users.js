const express = require('express')
const router = express.Router()
const {User} = require('../models/index')
const passport = require('passport')

// /users
router.get('/', (req, res, next) => {
    
    User.findAll()    
    .then((user) => res.send(user))
})

router.post("/", (req, res, next) => {
   // res.send(console.log("hola")) 
    User.create(req.body).then((user) => res.send(user));
})

// Login user
  router.post("/login", passport.authenticate("local"), (req, res) => {
    if(!req.user){
        console.log("problemillas badre")
    }  
    res.send(req.user);
});

router.post("/logout", (req, res) => {
    req.logOut();
    res.redirect("/me");
});

router.get("/me", (req, res) => {
    if (!req.user) {
        return res.sendStatus(401);
    }
    res.send(req.user);     //cargamos el user en el estado.
}); 

//solo para el usuario conectado
router.get("/user", (req, res) => {
    res.send(req.user)
})

module.exports = router