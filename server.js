const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use('/', require('./routes/index'));
app.use('/books', require('./routes/books.routes'));

const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// const controllerBook = require('./controllers/books.controller');
// app.get("/", (req, res) => {
//   controllerBook.findAll(req, res);
// });

// const controllerAuthors = require('./controllers/authors.controller');
// app.get("/", (req, res) => {
//   controllerAuthors.findAll(req, res);
// });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});