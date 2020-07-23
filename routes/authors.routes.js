const express = require('express');
const authorsRoute = express.Router();
const authors = require("../controllers/authors.controller.js");
const {QueryTypes} = require('sequelize');
const sequlize = require('sequelize');
const db = require("../models");
const authorsDB = db.books;
const Op = db.Sequelize.Op;

authorsRoute.get("/", authors.findAll);
  
authorsRoute.get("/:id", async(req,res) => {
  const {id} = req.params;
  let found = await  authorsDB.findOne({where:{id}});
  if(!found) {
    return res.json({code:600})
  }
  return res.json({code:200, author: found})
});

// authorsRoute.post("/", async(req,res) => {
//   //???
//   const{book, authors, publishing} = res.body.
// });

authorsRoute.put("/:id", authors.update);

authorsRoute.delete("/:id", authors.delete);

module.exports = {
  authorsRoute
};
