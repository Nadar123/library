const express = require('express');
const booksRoute = express.Router();
const books = require("../controllers/books.controller");
const {QueryTypes} = require('sequelize');
const sequlize = require('sequelize');
const db = require("../models");
const BooksDB = db.books;
const Op = db.Sequelize.Op;

booksRoute.get("/", async(req,res)=>{
  let data = await BooksDB.findAll({include:[{model:db.authors,as:'authors'},{model:db.publishing,as:'publishing'}]})
  return res.json({code:200,data})
});
  
booksRoute.get("/:id", async(req,res)=>{
  const {id} = req.params;
  let found = await BooksDB.findOne({where:{id}});
  if(!found){
     return res.json({code:600}) 
  }
  return res.json({code:200,book:found})
});

booksRoute.post("/", async(req,res)=>{
  console.log(req.body)
  const {book,authors,publishing} = req.body.bookForm;

  let au = db.authors;
  let pub = db.publishing;
  try{
     let newBook = await BooksDB.create({
    name:book.name,
    isbn_code:book.isbn_code,
    authors:{
     ...authors
    },
    publishing:{...publishing}
  },{include:[{model:au,as:'authors'},{model:pub,as:'publishing'}]})
  return res.json({code:200,newBook})
  }catch(e){
    return res.json({code:501,error:"Unable to save"})
  }
 
 
  
});

booksRoute.post("/:id", async(req,res)=>{
  const {id,book,authors,publishing} = req.body.bookForm;
  let updated = await BooksDB.update(
    {name:book.name,isbn_code:book.isbn_code},{where:{id}})

  return res.json({code:201,data:updated})
});

booksRoute.delete("/:id", books.delete);

module.exports = booksRoute;