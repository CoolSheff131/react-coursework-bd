const express = require('express');
const app = express();
const port = 3000;
app.get('/', (request, response) => {
  response.send('Hello from Express!');
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
///////////////////////////////
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  connection.query('SELECT * FROM test', function (err, result) {
    if (err) throw err;
    console.log('Result: ' + result);
  });
});
// тестирование подключения
// connection.execute('SELECT * FROM test', function (err, results, fields) {
//   console.log(err);
//   console.log(results); // собственно данные
//   console.log(fields); // мета-данные полей
//});
// закрытие подключения
// connection.end(function (err) {
//   if (err) {
//     return console.log('Ошибка: ' + err.message);
//   }
//   console.log('Подключение закрыто');
// });
