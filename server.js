'use strict';

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


app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});


