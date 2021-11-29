var express = require('express');
var router = express.Router();
var bd = require('../bd');

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
