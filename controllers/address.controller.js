const db = require("../models");
const address = db.address;
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

  // Create 
  const address = {
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
  
  };

  // Save in the database
  address.create(address)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the address"
      });
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { country: { [Op.like]: `%${name}%` } } : null;

  address.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving address."
      });
    });
}

// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  address.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving address with id=${id}`
      });
    });
}

// Update a by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  address.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "address was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update address with id=${id}. Maybe address was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating address with id=" + id
      });
    });
};

// Delete a address with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  address.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "address was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete address with id=${id}. Maybe address was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete address with id=" + id
      });
    });
};

// Delete all from the database.
// exports.deleteAll = (req, res) => {
//   address.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} address were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all address."
//       });
//     });
// }