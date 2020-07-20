const db = require("../models");
const books = db.books;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a 
  const books = {
    name: req.body.name,
    isbn_code: req.body.isbn_code,
  };

  // Save in the database
  books.create(books)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the books"
      });
    });
};

// Retrieve all from the database.
module.exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  books.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    });
}

// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  books.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving books with id=${id}`
      });
    });
}

// Update a by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  books.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "books was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update books with id=${id}. Maybe books was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating books with id=" + id
      });
    });
};

// Delete a books with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  books.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "books was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete books with id=${id}. Maybe books was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete books with id=" + id
      });
    });
};

// Delete all from the database.
// exports.deleteAll = (req, res) => {
//   books.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} books were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all books."
//       });
//     });
// }