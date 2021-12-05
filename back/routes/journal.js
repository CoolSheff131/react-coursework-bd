var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/', function (req, res) {
  bd.query(
    `select 
  journal.actionType, 
  journal.documentId, 
  journal.workerId, 
  workers.firstName as workerFirstName, 
  workers.secondName as workersSecondName,
  document.number as documentNumber from journal
  JOIN workers on workers.id = journal.workerId
  JOIN document on document.id = journal.documentId`,
    function (err, result) {
      if (err) throw err;
      res.send(result);
    },
  );
});

router.post('/', function (req, res) {
  console.log(req);
  const actionType = req.body.actionType;
  const documentId = req.body.documentId;
  const documentNumber = req.body.documentNumber;
  const workerId = req.body.workerId;
  bd.query(
    `INSERT journal(actionType, documentId, workerId)
            VALUES ('${actionType}', '${documentId}', '${workerId}')`,
    function (err, result) {
      console.log(err);
      res.send(result);
    },
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req);
  bd.query(`DELETE FROM journal WHERE id = ${id}`, (err, result) => {
    console.log(result);
    console.log(err);

    res.send(result);
  });
});

module.exports = router;
