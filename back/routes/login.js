var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.post('/', (req, res) => {
  if (req.body.login === 'ADMIN' && req.body.password === 'ADMIN') {
    res.send({ name: 'ADMIN', role: 'ADMIN' });
  } else if (req.body.login === 'ORGANIZATION' && req.body.password === 'ORGANIZATION') {
    res.send({ name: 'ORGANIZATION', role: 'ORGANIZATION' });
  } else if (req.body.login === 'DIRECTOR' && req.body.password === 'DIRECTOR') {
    res.send({ name: 'DIRECTOR', role: 'DIRECTOR' });
  } else if (req.body.login === 'OTDEL' && req.body.password === 'OTDEL') {
    res.send({ name: 'OTDEL', role: 'OTDEL' });
  } else if (req.body.login === 'ARCHIVE' && req.body.password === 'ARCHIVE') {
    res.send({ name: 'ARCHIVE', role: 'ARCHIVE' });
  } else {
    bd.query(
      `select * from workers
              WHERE firstName = ${req.body.login} AND secondName = ${req.body.password}`,
      function (err, result) {
        if (err) {
          res.send({ name: 'ERR', role: 'ERR' });
        }
        res.send(result);
      },
    );
  }
});

module.exports = router;
