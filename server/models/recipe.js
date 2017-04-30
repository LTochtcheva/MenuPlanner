'use strict'
const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('recipe', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.STRING,
    allowNull: false
  },
  images: {
    type: Sequelize.STRING
  },
  likes: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
