// const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

//  db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.authors = require("./authors.model.js")(sequelize, Sequelize);
// db.books = require("./books.model.js")(sequelize, Sequelize);
// db.publishing = require("./publishing.model.js")(sequelize, Sequelize);
// db.address = require("./address.model.js")(sequelize, Sequelize);

// module.exports = db;

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db = {}


if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let name = (file.split('.model.js')[0])
    var model = require(path.join(__dirname, file))(sequelize,Sequelize);
  
    db[name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db; 