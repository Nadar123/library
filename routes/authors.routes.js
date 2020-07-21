const express = require('express');
const authorsRoute = express.Router();
const authors = require("../controllers/authors.controller.js");


authorsRoute.get("/", authors.findAll);
  
authorsRoute.get("/:id", authors.findOne);

authorsRoute.post("/", authors.create);

authorsRoute.put("/:id", authors.update);

authorsRoute.delete("/:id", authors.delete);

module.exports = {
  authorsRoute
};
