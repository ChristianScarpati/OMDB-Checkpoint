// server configs
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const {User, Favourites} = require('../models/index')


const db = require("../db/index");
const routes = require('../routes/index')
const PORT = 3001;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
//require('./passportConfig')(passport)

passport.use(
  new localStrategy(
    {
      usernameField: "email", // aca le estamos diciendo que el campo de username, es email. en el index.html del form
      passwordField: "password",
    },
    function (email, password, done) {    // con esto de acá bva a buscar al req.body username
      User.findOne({ where: { email } })  // busco en la base de datos
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {   
              return done(null, false); // wrong password
            }
            return done(null, user); // success :D
          });
        })
        .catch(done); 
    }
  )
);

passport.serializeUser(function (user, done) {    // crea la cookie y se la envía al user
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {    //lee la cookie, que solo llega con una Id!
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// Express Routing

//-------------------------------------------------------------------------------------------------------------------------


app.use("/api", routes)

//inicializo el server

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("server On", PORT);
  });
});
