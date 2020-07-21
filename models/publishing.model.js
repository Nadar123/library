module.exports = (sequelize, Sequelize) => {

  const publishings = sequelize.define("publishings", {
    name: {
      type: Sequelize.STRING
    },
    estabish_year: {
      type: Sequelize.INTEGER
    },
    country: {
      type: Sequelize.STRING
    },
    address_id: {
      type: Sequelize.INTEGER
    }
  });

  return publishings;
};
