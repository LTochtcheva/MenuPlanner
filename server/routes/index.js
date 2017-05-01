const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const random = require('random-number-in-range');
module.exports = router;

const getRandomIds =  () => {
  let ids = [];
  while ( ids.length < 7 ) {
    let x = random(1, 15);
    if(ids.indexOf(x) === -1) ids.push(x);
  }
  return ids;
}
router.get('/api/recipes/random', function(req, res, next) {
  let randomIds = getRandomIds();

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

