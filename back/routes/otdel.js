var express = require('express');
var router = express.Router();
var bd = require('../bd');
// Home page route
router.get('/', function (req, res) {
  bd.query('select * from otdel', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/', function (req, res) {
  console.log(req);
  const firstNameBoss = req.body.firstNameBoss;
  const name = req.body.name;
  const organizationId = req.body.organizationId;
  const organizationName = req.body.organizationName;
  const phone = req.body.phone;
  const secondNameBoss = req.body.secondNameBoss;
  bd.query(
    `INSERT otdel(firstNameBoss, name, organizationId, organizationName, phone, secondNameBoss)
            VALUES ('${firstNameBoss}', '${name}', '${organizationId}', '${organizationName}', '${phone}','${secondNameBoss}')`,
    function (err, result) {
      console.log(err);
      res.send(result);
    },
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req);
  bd.query(`DELETE FROM otdel WHERE id = ${id}`, (err, result) => {
    console.log(result);
    console.log(err);

    res.send(result);
  });
});

module.exports = router;
