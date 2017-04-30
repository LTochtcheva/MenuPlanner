const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const random = require('random-number-in-range');
module.exports = router;


router.get('/api/recipes/random', function(req, res, next) {
  let randomIds = [];
  for (let i = 0; i < 8; i++) {
    randomIds.push(random(1, 15));
  }
  Recipe.findAll({
    where: {
      id: randomIds
    }
  })
    .then(function (foundRecipes) {
            res.json(foundRecipes);
         })
    .catch(next);
});

router.get('/api/recipes', function(req, res, next) {
  Recipe.findAll({})
    .then(function (foundRecipes) {
            res.json(foundRecipes);
         })
    .catch(next);
});


router.get('/api/recipes/:id', function(req, res, next) {
  console.log('ID: ', req.params)
  Recipe.findOne({
    where: { id: req.params.id}
  }).
  then(function (theRecipe) {
    if (!theRecipe) {
      res.sendStatus(404);
    }
    else {res.json(theRecipe);}
  })
  .catch(next);
});


router.post('/api/recipes', function(req, res, next) {
    Recipe.create(req.body)
    .then(function (newRecipe) {
       res.json(newRecipe);
  })
    .catch(next);
});

router.put('/api/recipes/:id', function(req, res, next) {
      Recipe.update(req.body,
         {
          where: {
              id: req.params.id,
          },
          returning: true
         })
      .then(function (updatedRecipe) {
         res.json(updatedRecipe[1][0]);
       })
      .catch(next);
     }
  )

