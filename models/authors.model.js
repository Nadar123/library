module.exports = (sequelize, Sequelize) => {

  const authors = sequelize.define("authors", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    date_of_birth: {
      type: Sequelize.DATE
    }
  });

  return authors;
};