const db = require("../db")
const S = require("sequelize")

class Favourites extends S.Model {}

Favourites.init({
        userFrom:{
            type: S.STRING,
            ref: "User"
        },
        movieTitle:{
            type:S.STRING
        },
        movieId:{
            type:S.STRING
        },
        movieImage:{
            type: S.STRING
        }

}, {sequelize: db, timestamps: false, modelName: "favourites"})

module.exports = Favourites;





/* userFrom: 
    {
        type: String,
        ref: "User"
    },
    movieId:{
        type: String
    },
    movieTitle:{
        type: String
    },
    movieImage:{
        type: String
    } */