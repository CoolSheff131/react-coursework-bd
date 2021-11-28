var express = require('express');
var router = express.Router();
var bd = require('../bd');
// Home page route
router.get('/', function (req, res) {
  bd.query('select * from organization', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/', function (req, res) {
  console.log(req);
  const addressIndex = req.body.addressIndex;
  const city = req.body.city;
  const email = req.body.email;
  const faks = req.body.faks;
  const name = req.body.name;
  const phone = req.body.phone;
  bd.query(
    `INSERT organization(addressIndex, city, email, faks, name, phone)
            VALUES ('${addressIndex}', '${city}', '${email}', '${faks}','${name}','${phone}')`,
    function (err, result) {
      res.send(result);
    },
  );
});

module.exports = router;
