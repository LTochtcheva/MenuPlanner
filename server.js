 'use strict';
 const express = require('express');
 const volleyball = require('volleyball');
 const path = require('path');
 const bodyParser = require('body-parser');
 const routes = require('./server/routes');

 const app = express();

 app.use(volleyball);

 app.use(express.static(__dirname));

//serving static, like css or images
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




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
//
app.get('/', function (req, res, next) {
  res.send('Welcome to Menu Planner!');
 });
app.use('/', routes);

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});


// var express = require('express');
// var morgan = require('morgan');
// var bodyParser = require('body-parser');
// var chalk = require('chalk');
// var path = require('path');

// var routes = require('./routes');

// var app = express();

// app.use(morgan('      ↓ received :method :url · responded :status :res[Content-Type]'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res, next) {
//   res.send('Welcome to Articles! Check out our lovely routes.');
// });

// app.use('/', routes);
