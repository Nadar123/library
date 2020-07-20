module.exports = (sequelize, Sequelize) => {
  const books = sequelize.define("books", {
    name: {
      type: Sequelize.STRING
    },
    isbn_code: {
      type: Sequelize.INTEGER
    }
  });

  return books;
};