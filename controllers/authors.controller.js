const db = require("../models");
const authors = db.authors;
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
  const authors = {
    id: res.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth
  };

  // Save in the database
  authors.create(authors)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the authors"
      });
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const name = req.query.first_name;
  var condition = name ? { first_name: { [Op.like]: `%${name}%` } } : null;

  authors.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving authors."
      });
    });
}

// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  authors.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving authors with id=${id}`
      });
    });
}

// Update a by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  authors.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "authors was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update authors with id=${id}. Maybe authors was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating authors with id=" + id
      });
    });
};

// Delete a authors with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  authors.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "authors was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete authors with id=${id}. Maybe authors was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete authors with id=" + id
      });
    });
};