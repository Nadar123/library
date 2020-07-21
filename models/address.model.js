module.exports = (sequelize, Sequelize) => {

  const address = sequelize.define("address", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    country: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    },
  });

  return address;
};