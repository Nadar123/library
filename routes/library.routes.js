// module.exports = app => {
//   const library = require("../controllers/books.controller.js");
//   // const library = require("../controllers/authors.controller.js");
//   // const library = require("../controllers/address.controller.js");
//   // const library = require("../controllers/pubilshing.controller.js");

//   var router = require("express").Router();

//   // Createnew
//   router.post("/", library.create);

//   // Retrieve all library
//   router.get("/", library.findAll);

//   // Retrieve all published library
//   // router.get("/published", library.findAllPublished);

//   // Retrieve single with id
//   router.get("/:id", library.findOne);

//   // Updatewith id
//   router.put("/:id", library.update);

//   // Delete with id
//   router.delete("/:id", library.delete);

//   // Create new
//   router.delete("/", library.deleteAll);

//   app.use('/api/library', router);
// };