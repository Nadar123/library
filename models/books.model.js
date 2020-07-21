

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

  return books;
};