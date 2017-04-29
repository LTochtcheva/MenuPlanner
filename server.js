'use strict';
const recipes = require('./browser/constants')
const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));



// Promise.all([
//         models.User.sync({}),
//         models.Page.sync({})
//     ])
//     .then(function () {
//         server.listen(3001, function () {
//             console.log('Server is listening on port 3001!');
//         });
//     })
//     .catch(console.error
// app.get('/api/recipes', function (req, res) {
//   res.json(recipes);
// });

// app.get('/api/recipes/:id', function (req, res) {
//   const aRecipe = recipes.find(r => r.id === Number(req.params.id));
//   if (!aPuppy) res.status(404).end();
//   else res.json(aPuppy);
// });

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});


