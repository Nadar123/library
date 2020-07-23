const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

 db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.authors = require("./authors.model.js")(sequelize, Sequelize);
db.books = require("./books.model.js")(sequelize, Sequelize);
db.publishing = require("./publishing.model.js")(sequelize, Sequelize);
db.address = require("./address.model.js")(sequelize, Sequelize);

module.exports = db;