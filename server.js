 'use strict';
 const express = require('express');
 const volleyball = require('volleyball');
 const path = require('path');
 const bodyParser = require('body-parser');
 const routes = require('./server/routes');
 const models = require('./server/models');
 const Promise = require('bluebird');

 const app = express();

 app.use(volleyball);

 app.use(express.static(__dirname));

//serving static, like css or images
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.send('Welcome to Menu Planner!');
 });
app.use('/', routes);

Promise.all([
       // models.User.sync({}),
        models.Recipe.sync({})
    ])
    .then(function () {
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(console.error);
