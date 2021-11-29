var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/', (req, res) => {
  bd.query('select * from organization', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req);
  bd.query(`DELETE FROM organization WHERE id = ${id}`, (err, result) => {
    console.log(result);
    console.log(err);

    res.send(result);
  });
});

module.exports = router;
