var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/archive', function (req, res) {
  bd.query('select * from document', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/onhands', function (req, res) {
  bd.query(
    `select DISTINCT  document.*, 
  workers.firstName as workerFirstName, 
  workers.secondName as workersSecondName from document
  JOIN journal on document.id = journal.documentId
  JOIN workers on workers.id = journal.workerId where document.inArchive = 0`,
    function (err, result) {
      if (err) throw err;
      res.send(result);
    },
  );
});

router.get('/journal', function (req, res) {
  bd.query(
    `select 
        journal.id, 
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
module.exports = router;
