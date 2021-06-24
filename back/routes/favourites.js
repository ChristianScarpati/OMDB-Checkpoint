const express = require('express')
const router = express.Router()

const {Favourites, User} = require('../models/index.js')

            //ADENTRO DE FAVOURITES//    

router.get('/', (req, res, next) => {
    console.log("entre a favoritos")
               Favourites.findAll({include: User})    
               .then((Favourite) => res.send(Favourite))
})

router.post("/", (req, res, next) => {

    //console.log("estoy en post de favoritos")
   // const {userFrom, movieId, movieTitle, movieImage, FavouritesId} = req.body
   Favourites.create(req.body).then((user) => res.send(user));
    
    //User.create(req.body).then((user) => res.send(user));
})

router.post("/delete", (req, res, next) => {
    Favourites.destroy(req.body)
    .then((favourites) => res.send(favourites))

})


module.exports = router