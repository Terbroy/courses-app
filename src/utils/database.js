const { Sequelize } = require('sequelize');
require("dotenv").config();  

const db = new Sequelize  ({
  database: process.env.DB_NAME, 
  username: process.env.DB_USER, 
  host: process.env.DB_HOST, 
  password: process.env.DB_PASSWORD, 
  dialect: "postgres",
});
  
module.exports = db;