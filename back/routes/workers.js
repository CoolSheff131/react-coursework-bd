var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function (req, res) {
  res.send('workers home page');
});

module.exports = router;
