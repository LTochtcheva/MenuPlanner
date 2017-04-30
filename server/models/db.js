
const Sequelize = require('sequelize');
 module.exports = new Sequelize('postgres://localhost:5432/menu-planner', {
    logging: false,
    native: true
});
