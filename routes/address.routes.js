const express = require('express');
const addressRoute = express.Router();
const address = require("../controllers/address.controller.js");


addressRoute.get("/", address.findAll);
  
addressRoute.get("/:id", address.findOne);

addressRoute.post("/", address.create);

addressRoute.put("/:id", address.update);

addressRoute.delete("/:id", address.delete);

module.exports = {
  addressRoute
};