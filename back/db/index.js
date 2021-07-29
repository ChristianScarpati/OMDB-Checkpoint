const Sequelize = require("sequelize")

//siempre es 5432

const db = new Sequelize("postgres://localhost:5432/omdb", {
host: "localhost",
logging: false,
dialect: "postgres"
})

module.exports = db;