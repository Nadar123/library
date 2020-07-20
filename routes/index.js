// require("./books.routes");
// require("./authors.routes");
// require("./address.routes");
var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Index Page');
});
// const controllerBook = require('../controllers/books.controller');
// router.get("/", (req, res) => {
//   controllerBook.findAll(req, res);
//   console.log('booooks')
// });

// const controllerAuthors = require('../controllers/authors.controller');
// router.get("/", (req, res) => {
//   controllerAuthors.findAll(req, res);
//   console.log('authors111111')
// });


router.get('/about', function(req, res) {
    res.send('About Page');
});

module.exports = router;