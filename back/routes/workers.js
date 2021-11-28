var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/', function (req, res) {
  bd.query('select * from workers', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/', function (req, res) {
  console.log(req);
  const firstName = req.body.firstName;
  const otdelId = req.body.otdelId;
  const otdelName = req.body.otdelName;
  const secondName = req.body.secondName;
  bd.query(
    `INSERT workers(firstName, otdelId, otdelName, secondName)
            VALUES ('${firstName}', '${otdelId}', '${otdelName}', '${secondName}')`,
    function (err, result) {
      console.log(err);
      res.send(result);
    },
  );
});

module.exports = router;
