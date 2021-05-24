// Setup our connection to run locally or through JawsDB and Heroku
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//Keep our information secure using variables in the .env file
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
