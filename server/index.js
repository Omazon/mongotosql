const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('../server/routes/routes'))

module.exports = {
   path: '/api',
   handler: app
}