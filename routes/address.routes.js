module.exports = app => {
const address = require("../controllers/address.controller.js");

  var router = require("express").Router();

  router.get("/", address.findAll);
  
  router.get("/:id", address.findOne);
  
  router.post("/", address.create);

  router.put("/:id", address.update);
  
  router.delete("/:id", address.delete);
  

  app.use('/api/address', router);

};