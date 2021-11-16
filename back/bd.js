const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'arhive',
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;

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
