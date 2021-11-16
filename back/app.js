var bd = require('./bd');
var document = require('./routes/document');
var journal = require('./routes/journal');
var organization = require('./routes/organization');
var otdel = require('./routes/otdel');
var workers = require('./routes/workers');
const express = require('express');
const app = express();
const port = 3000;
app.use('/document', document);
app.use('/journal', journal);
app.use('/organization', organization);
app.use('/otdel', otdel);
app.use('/workers', workers);
app.get('/', (request, response) => {
  bd.query('select * from document', function (err, result) {
    if (err) throw err;
    response.send(result);
  });
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
