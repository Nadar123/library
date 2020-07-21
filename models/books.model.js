// module.exports = (sequelize, Sequelize) => {
  
//   const books = sequelize.define("books", {
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     isbn_code: {
//       type: Sequelize.INTEGER,
//       validate: {
//         notNull: {
//           msg: 'Please enter isbn_code',
//         },
//       },
//     }
//   });

//   return books;
// };

module.exports = (sequelize, Sequelize) => {
  const books = sequelize.define('books', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    isbn_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter isbn_code',
        },
      },
    },
  });

  return books;
};