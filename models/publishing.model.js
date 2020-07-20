module.exports = (sequelize, Sequelize) => {

  const pubilshing = sequelize.define("pubilshing", {
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

  return pubilshing;
};