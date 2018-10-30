const express = require('express');
const app = express();
const env = require('./config/environment');

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

const mongoose = require('mongoose');
mongoose.connect(env.dbUri);


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Logging middleware
app.use('*', function(req, res, next) {
  console.log('Incoming request', req.method, req.originalUrl);
  next();
});

const router = require('./config/routes');
app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
