const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});
// тестирование подключения
connection.execute('SELECT * FROM test', function (err, results, fields) {
  console.log(err);
  console.log(results); // собственно данные
  console.log(fields); // мета-данные полей
});
// закрытие подключения
connection.end(function (err) {
  if (err) {
    return console.log('Ошибка: ' + err.message);
  }
  console.log('Подключение закрыто');
});
