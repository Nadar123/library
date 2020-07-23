const {Sequelize,DataTypes} = require('sequelize')
//const db = require("./index");
//const authors = require('./authors.model');
//const sequelize = db.sequelize;

module.exports = (sequelize, Sequelize) => {
  const books = sequelize.define('books', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    isbn_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter isbn_code',
        },
      },
    },
  });
  //books.belongsToMany(authors)
  return books;
};