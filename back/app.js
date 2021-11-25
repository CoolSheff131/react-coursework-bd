var document = require('./routes/document');
var journal = require('./routes/journal');
var organization = require('./routes/organization');
var otdel = require('./routes/otdel');
var workers = require('./routes/workers');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use('/document', document);
app.use('/journal', journal);
app.use('/organization', organization);
app.use('/otdel', otdel);
app.use('/workers', workers);
// app.get('/', (request, response) => {

// });
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
