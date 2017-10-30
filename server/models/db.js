
const Sequelize = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/menu-planner';

module.exports = new Sequelize(connectionString, {
    logging: false,
    native: true
});
