var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'demo'
});

connection.connect();

connection.query('SELECT * from users', function (error, results, fields) {
  if (error) throw error;
  let a = results.map(r => r.username)
  results.forEach(r=>{console.log(r)})
  console.log(results.length);
  console.log('=========')
  console.log(a);
  console.log(results);
});

connection.end();