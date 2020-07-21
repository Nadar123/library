const db = require("../models");
const books = db.books;
const Op = db.Sequelize.Op;

//async create
exports.create = async (req, res) => {
  try {
  const new_books = {
    id: req.body.id,
    name: req.body.name,
    isbn_code: req.body.isbn_code,
  };
  const newBookResult = await books.create(new_books);

  if(newBookResult){
    res.send(newBookResult)
  } else {
    res.send('oops')
  }
  } catch (error) {
    res.status(500).json(error)
  }
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
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

  new_books.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving new_books with id=${id}`
      });
    });
}

// Update a by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  new_books.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "new_books was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update new_books with id=${id}. 
                    Maybe new_books was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating new_books with id=${id}`
      });
    });
};

// Delete a new_books with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  new_books.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "new_books was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete new_books with id=${id}. Maybe new_books was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete new_books with id=${id}`
      });
    });
};