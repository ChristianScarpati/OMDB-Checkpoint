const express = require('express')
const router = express.Router()

const {Favourites, User} = require('../models/Favourites')

            //ADENTRO DE FAVOURITES//    

router.get('/', (req, res, next) => {
    console.log("entre a favoritos")
               Favourites.findAll({include: User})    
               .then((Favourite) => res.send(Favourite))
})

router.post("/", (req, res, next) => {

    console.log("estoy en post de favoritos")
    const {userFrom, movieId, movieTitle, movieImage, FavouritesId} = req.body
    User.findByPk(userId)
    .then((user) => console.log(user))    
})

module.exports = router