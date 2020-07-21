const express = require('express');
const booksRoute = express.Router();
const books = require("../controllers/books.controller");


booksRoute.get("/", books.findAll);
  
booksRoute.get("/:id", books.findOne);

booksRoute.post("/", books.create);

booksRoute.put("/:id", books.update);

booksRoute.delete("/:id", books.delete);

module.exports = {
  booksRoute
};