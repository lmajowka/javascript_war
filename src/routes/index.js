var express = require('express');
var router = express.Router();
var path = require('path');


router.route('/').get(function (request, response){
  response.sendFile('index.html', { root: path.resolve(__dirname, '../views') });
});

module.exports = router;