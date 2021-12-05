var express = require('express');
var router = express.Router();
var bd = require('../bd');
router.get('/', function (req, res) {
  bd.query(
    `select 
          otdel.id,
          otdel.firstNameBoss, 
          otdel.name, 
          otdel.organizationId, 
          otdel.phone, 
          otdel.secondNameBoss, 
          organization.name as organizationName from otdel
          JOIN organization on organization.id = otdel.organizationId `,
    function (err, result) {
      if (err) throw err;
      //console.log(result);
      res.send(result);
    },
  );
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
    `INSERT otdel(firstNameBoss, name, organizationId, phone, secondNameBoss)
            VALUES ('${firstNameBoss}', '${name}', '${organizationId}', '${phone}','${secondNameBoss}')`,
    function (err, result) {
      console.log(err);
      res.send(result);
    },
  );
});

router.put('/', function (req, res) {
  const id = req.body.id;
  const firstNameBoss = req.body.firstNameBoss;
  const name = req.body.name;
  const organizationId = req.body.organizationId;
  const organizationName = req.body.organizationName;
  const phone = req.body.phone;
  const secondNameBoss = req.body.secondNameBoss;
  console.log(req);
  bd.query(
    `UPDATE otdel SET firstNameBoss='${firstNameBoss}', name='${name}', organizationId='${organizationId}', phone='${phone}', secondNameBoss='${secondNameBoss}'
            where id = ${id}`,
    function (err, result) {
      console.log(err);
      console.log(result);
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
