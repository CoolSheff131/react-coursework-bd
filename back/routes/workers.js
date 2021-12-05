var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/', function (req, res) {
  bd.query(
    `select workers.id, workers.firstName, workers.otdelId, workers.secondName,
          otdel.name as otdelName from workers
          JOIN otdel on otdel.id = workers.otdelId`,
    function (err, result) {
      if (err) throw err;
      res.send(result);
    },
  );
});

router.post('/', function (req, res) {
  console.log(req);
  const firstName = req.body.firstName;
  const otdelId = req.body.otdelId;
  const otdelName = req.body.otdelName;
  const secondName = req.body.secondName;
  bd.query(
    `INSERT workers(firstName, otdelId, secondName)
            VALUES ('${firstName}', '${otdelId}', '${secondName}')`,
    function (err, result) {
      console.log(err);
      res.send(result);
    },
  );
});

router.put('/', function (req, res) {
  const id = req.body.id;
  const firstName = req.body.firstName;
  const otdelId = req.body.otdelId;
  const otdelName = req.body.otdelName;
  const secondName = req.body.secondName;
  console.log(req);
  bd.query(
    `UPDATE workers SET firstName='${firstName}', secondName='${secondName}', otdelId='${otdelId}'
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
  bd.query(`DELETE FROM workers WHERE id = ${id}`, (err, result) => {
    console.log(result);
    console.log(err);

    res.send(result);
  });
});

module.exports = router;
