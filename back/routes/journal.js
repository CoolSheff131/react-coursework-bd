var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/', function (req, res) {
  bd.query('select * from journal', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/', function (req, res) {
  console.log(req);
  const actionType = req.body.actionType;
  const documentId = req.body.documentId;
  const documentNumber = req.body.documentNumber;
  const workerId = req.body.workerId;
  bd.query(
    `INSERT journal(actionType, documentId, documentNumber, workerId)
            VALUES ('${actionType}', '${documentId}', '${documentNumber}', '${workerId}')`,
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
