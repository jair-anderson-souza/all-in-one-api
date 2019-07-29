var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var requireDir = require('require-dir');
requireDir('./src/models');

var routes = require('./src/routes');

app.use('/api', routes);

app.use(express.json());


app.listen(3000);