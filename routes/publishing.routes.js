const express = require('express');
const publishingRoute = express.Router();
const publishing = require("../controllers/publishing.controller");

publishingRoute.get("/", publishing.findAll);
  
publishingRoute.get("/:id", publishing.findOne);

publishingRoute.post("/", publishing.create);

publishingRoute.put("/:id", publishing.update);

publishingRoute.delete("/:id", publishing.delete);

module.exports = {
  publishingRoute
};