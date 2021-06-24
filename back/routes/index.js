const express = require('express')
const router = express.Router()
const passport = require('passport')


const users = require('./users')
const Favourites = require('./favourites')



        //API

router.use("/users", users)

//ME TIRA ERRROR
router.use('/favourites', Favourites)


router.post("/register", (req, res) => {
    User.create(req.body)
    .then((user) => {
    res.status(201).send(user);
    });
});

/*

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user);
});

router.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
});

//Pensá la ruta que devuelva la información del usuario que, una vez loggeado, salga de la página y vuelva a entrar. Podés hacer algo como GET "/me".
router.get("/me", (req, res) => {
if (!req.user) {
    return res.sendStatus(401);
}
    res.send(req.user);
}); */



module.exports = router