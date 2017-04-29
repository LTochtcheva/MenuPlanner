'use strict'

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('recipe', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false
  },
  images: {
    type: DataTypes.STRING
  },
  likes: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
