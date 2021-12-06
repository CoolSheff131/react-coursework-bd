var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.get('/find/:id', function (req, res) {
  const { id } = req.params;
  if (id !== undefined) {
    bd.query(
      `select 
    workers.id as workerHandlingId,
    journal.id,
    document.id as docId from journal
    JOIN workers on workers.id = journal.workerId
    JOIN document on document.id = journal.documentId
    where document.id = ${id} and document.inArchive = 0
    ORDER BY journal.id DESC `,
      function (err, result) {
        console.log('err');
        console.log(err);
        if (err) throw err;
        console.log(result);
        console.log(result[0]);
        res.send({ workerHandlingId: result[0].workerHandlingId });
      },
    );
  }
});

router.get('/', function (req, res) {
  bd.query('select * from document', function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/', function (req, res) {
  console.log(req);
  const firstNameAuthor = req.body.firstNameAuthor;
  const name = req.body.name;
  const number = req.body.number;
  const organizationName = req.body.organizationName;
  const pageCount = req.body.pageCount;
  const secondNameAuthor = req.body.secondNameAuthor;
  const type = req.body.type;
  const year = req.body.year;

  bd.query(
    `INSERT document(firstNameAuthor, name, number, organizationName, pageCount, secondNameAuthor, type, year)
            VALUES ('${firstNameAuthor}', '${name}', '${number}', '${organizationName}', '${pageCount}', '${secondNameAuthor}', '${type}', '${year}')`,
    function (err, result) {
      console.log(err);
      res.send(result);
    },
  );
});

router.put('/', function (req, res) {
  const id = req.body.id;
  const firstNameAuthor = req.body.firstNameAuthor;
  const name = req.body.name;
  const number = req.body.number;
  const organizationName = req.body.organizationName;
  const pageCount = req.body.pageCount;
  const secondNameAuthor = req.body.secondNameAuthor;
  const type = req.body.type;
  const year = req.body.year;
  console.log(req);
  bd.query(
    `UPDATE document SET firstNameAuthor = '${firstNameAuthor}', name='${name}', number='${number}', 
                         organizationName='${organizationName}', pageCount='${pageCount}', secondNameAuthor='${secondNameAuthor}',
                         type='${type}', year='${year}'
            where id = ${id}`,
    function (err, result) {
      console.log(err);
      console.log(result);
      res.send(result);
    },
  );
});

router.patch('/', function (req, res) {
  const documentId = req.body.documentId;
  const inArchive = req.body.inArchive;
  const workerId = req.body.workerId;
  console.log(req);
  bd.query(
    `UPDATE document SET inArchive = '${inArchive ? '1' : '0'}'
            where id = ${documentId}`,
    function (err, result) {
      bd.query(
        `INSERT journal(actionType, documentId, workerId)
                VALUES ('${inArchive ? 'Положил' : 'Забрал'}', '${documentId}', '${workerId}')`,
        function (err, result) {
          console.log(err);
          res.send(result);
        },
      );
    },
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req);
  bd.query(`DELETE FROM document WHERE id = ${id}`, (err, result) => {
    console.log(result);
    console.log(err);

    res.send(result);
  });
});

module.exports = router;
