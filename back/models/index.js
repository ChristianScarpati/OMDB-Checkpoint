const User = require("./User");
const Favourites = require("./Favourites");
const db = require("../db")


// si exporto sin llaves, importo sin llaves 
// y VICEVERSA

User.hasMany(Favourites);
Favourites.belongsTo(User);



module.exports =  {User, Favourites, db} ;
