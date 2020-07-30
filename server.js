const express           = require("express");
const bodyParser        = require("body-parser");
const cors              = require("cors");
// const addressRoute      = require('./routes/address.routes');
// const {authorsRoute}    = require('./routes/authors.routes');
const booksRoute        = require('./routes/books.routes');
// const {publishingRoute} = require('./routes/publishing.routes');
const app = express();

db = require("./models");
db.sequelize.sync({ force: true }).then(() => { 
  console.log("Drop and re-sync db."); 
});

var corsOptions = {origin: true};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', booksRoute);

// listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});