const db = require("../models");
const express = require('express');
const router = express.Router();

const address = db.address;
const Op = db.Sequelize.Op;


router.get("/:id", async(req,res)=>{
  let id = req.params.id||null;
  let found = await address.findByPk(id);
  return res.json({code:200,found})
});

//router.post("/", address.create);

//router.put("/:id", address.update);

//router.delete("/:id", address.delete);
 
// router.get('/test',async(req,res)=>{
//   console.log("Here") 
//   return res.json({code:200,data:[]})
// })

module.exports = router; 