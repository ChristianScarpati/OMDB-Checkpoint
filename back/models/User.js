const db = require("../db");
const S = require("sequelize");

const bcrypt = require("bcryptjs");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: S.DataTypes.STRING,
      allowNull: true,
    },
    salt: {
      type: S.DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize: db, timestamps: false, modelName: "users" }
);

//miDdleware
User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});


module.exports = User;
