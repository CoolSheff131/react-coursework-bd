var express = require('express');
var router = express.Router();
var bd = require('../bd');

router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.login === 'ADMIN' && req.body.password === 'ADMIN') {
    res.send({ login: 'ADMIN', role: 'ADMIN' });
  } else if (req.body.login === 'ORGANIZATION' && req.body.password === 'ORGANIZATION') {
    res.send({ login: 'ORGANIZATION', password: '', role: 'ORGANIZATION' });
  } else if (req.body.login === 'DIRECTOR' && req.body.password === 'DIRECTOR') {
    res.send({ login: 'DIRECTOR', password: '', role: 'DIRECTOR' });
  } else if (req.body.login === 'OTDEL' && req.body.password === 'OTDEL') {
    res.send({ login: 'OTDEL', password: '', role: 'OTDEL' });
  } else if (req.body.login === 'ARCHIVE' && req.body.password === 'ARCHIVE') {
    res.send({ login: 'ARCHIVE', password: '', role: 'ARCHIVE' });
  } else {
    bd.query(
      `select distinct * from workers
              WHERE firstName = '${req.body.login}' AND secondName = '${req.body.password}'`,
      function (err, result) {
        console.log(result);
        if (err || result.length === 0) {
          res.send({ login: 'ERR', password: 'ERR', role: 'ERR' });
        } else {
          console.log(result[0]);
          res.send({
            login: result[0].firstName + ' ' + result[0].secondName,
            password: '',
            role: 'WORKER',
            workerId: result[0].id,
          });
        }
      },
    );
  }
});

module.exports = router;
