const {Sequelize,DataTypes} = require('sequelize')


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
  },{});
  books.associate = function (models){
    books.hasMany(models.authors,{as:'authors',foreignKey:'bookID'});
    books.hasOne(models.publishing,{as:'publishing',foreignKey:'bookID'})
  } 
  return books;
};