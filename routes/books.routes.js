
module.exports = app => {
  const books = require("../controllers/books.controller.js");

  var router = require("express").Router();

  router.post("/", books.create);
  
  router.get("/:id", books.findOne);
  
  router.put("/:id", books.update);
  
  router.delete("/:id", books.delete);
  
  // router.get("/", books.findAll);
 // router.delete("/", books.deleteAll);

  app.use('/api/books', router);
};