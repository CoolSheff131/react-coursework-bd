var express = require('express');
var router = express.Router();
var bd = require('../bd');
// Home page route
router.get('/', function (req, res) {
  bd.query('select * from journal', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
