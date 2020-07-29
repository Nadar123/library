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

module.exports = router; 