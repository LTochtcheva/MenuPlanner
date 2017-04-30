'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Recipe = require('./recipe');
//const User = require('./user');

// Form the associations

// Recipe.belongsTo(User);
// User.hasMany(Recipe);

module.exports = {
  Recipe: Recipe
  // ,User: User
};

