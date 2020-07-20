const db = require("../models");
const publishing = db.publishing;
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
  const publishing = {
    name: req.body.name,
    estabish_year: req.body.estabish_year,
    country: req.body.country,
    address_id: res.body.address_id
  };

  // Save in the database
  publishing.create(publishing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the publishing"
      });
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  publishing.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving publishing."
      });
    });
}

// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  publishing.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving publishing with id=${id}`
      });
    });
}

// Update a by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  publishing.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "publishing was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update publishing with id=${id}. Maybe publishing was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating publishing with id=" + id
      });
    });
};

// Delete a publishing with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  publishing.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "publishing was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete publishing with id=${id}. Maybe publishing was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete publishing with id=" + id
      });
    });
};

// Delete all from the database.
// exports.deleteAll = (req, res) => {
//   publishing.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} publishing were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all publishing."
//       });
//     });
// }