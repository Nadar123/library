module.exports = (sequelize, Sequelize) => {

  const address = sequelize.define("address", {
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