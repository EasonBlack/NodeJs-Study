var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'demo'
});




connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO users(username,password,enabled) values (?, ?, ?)', 
  ['d', "d", "d"],  (error, results, fields) => {
    if (error) {
      return connection.rollback(function() {
        throw error;
      });
    }

    connection.query('Update users set password=? where username="jack"', ['a'],  (error, results, fields)=> {
      if (error) {
        return connection.rollback(function() {
          throw error;
        });
      }
      connection.commit(function(err) {
        if (err) {
          return connection.rollback(function() {
            throw err;
          });
        }
        console.log('success!');
      });
    });
  });
});