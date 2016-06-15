var express = require('express');
var router = express.Router();
var options = {root: '/home/migbot/Projects/losGatos'};

var jwt = require('express-jwt');

// jwt checking
var jwtCheck = jwt({
  secret: new Buffer('aWMu9L6BGgz1J_nahLaYARIknyeW46CkqyEH5ykHbYxZC041OCbgPTXVWWISe2QI', 'base64'),
  audience: 'GlesvnfO7FdReEHnV8dmZhCjdTbqrXgp'
});





/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/public/index.html', options);
});

router.get('/private', jwtCheck, function(req, res, next) {
  res.send('private stuff!!');
});

router.get('/public', function(req, res, next) {
  res.send('public stuff!!');
});

router.get('/profile/:id', jwtCheck, function(req, res, next) {
	res.send("hooked up");
});

module.exports = router;
