const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('products_db', 'root', 'EB163Q7E', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
