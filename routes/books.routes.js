const express = require('express');
const booksRoute = express.Router();
const books = require("../controllers/books.controller");
const {QueryTypes} = require('sequelize');
const sequlize = require('sequelize');
const db = require("../models");
const BooksDB = db.books;
const Op = db.Sequelize.Op;

booksRoute.get("/", async(req,res)=>{
  let data = await BooksDB.findAll({include:
    [{model:db.authors,as:'authors'},{model:db.publishing,as:'publishing'}]})
    
  return res.json({code:200,data})
});
  
booksRoute.get("/:id", async(req,res)=>{
  const {id} = req.params;
  let found = await BooksDB.findOne({where:{id},include:
    [{model:db.authors,as:'authors'},{model:db.publishing,as:'publishing'}]});
  if(!found){
     return res.json({code:600}) 
  }
  return res.json({code:200,book:found})
});

booksRoute.post("/", async(req,res)=>{
  // console.log(req.body)
  const {book,authors,publishing} = req.body.bookForm;

  let au = db.authors;
  let pub = db.publishing;
  try{
     let newBook = await BooksDB.create({
    name:book.name,
    isbn_code:book.isbn_code,
    expenditure:book.expenditure,
    authors:{ ...authors },
    publishing:{...publishing}
  },{include:[{model:au,as:'authors'},{model:pub,as:'publishing'}]})
      return res.json({code:200,newBook})
  }catch(e){
    console.log(e)
    return res.json({code:501,error:e.original.sqlMessage})
  }
});

booksRoute.post("/delete", async (req,res)=>{
  let {id} = req.body;
  let book = await db.books.findOne({where:{id}});
  book.destroy();
  return res.json({code:200})
});
booksRoute.post("/:id", async(req,res)=>{
  const {id,book,authors,publishing} = req.body.bookForm;
  let updated = await BooksDB.update(
    {name:book.name,isbn_code:book.isbn_code},
    {where:{id}})

  let auth = await db.authors.findOne({bookID:id});
  if(auth){
    await db.authors.update(authors,{where:{bookID:id}})
  }else{
    authors.bookID = id;
    await db.authors.create(authors);
  }  
  await db.publishing.update(publishing,{where:{bookID:id}}) 
  return res.json({code:201,data:updated})
});



module.exports = booksRoute;