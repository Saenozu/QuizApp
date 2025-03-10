var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'toshwm',
  password : 'tltmxpaznlwm',
  database : 'QuizApp',
  dateStrings : 'date'
});
 
connection.connect();

connection.query('SELECT * from leaderboard', (error, rows, fields) => {
  if (error) throw error;
  console.log('Leaderboard: ', rows);
});

module.exports = connection;