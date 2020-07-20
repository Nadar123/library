module.exports = app => {
  const publishing = require("../controllers/publishing.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", publishing.create);
  
    router.get("/", publishing.findAll);
  
    router.get("/:id", publishing.findOne);
  
    router.put("/:id", publishing.update);
  
    router.delete("/:id", publishing.delete);
    
    app.use('/api/publishing', router);
  
  };