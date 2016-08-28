var pg = require('pg');
var conString = "postgres://eason:admin@172.13.2.10:5432/demo";

var client = new pg.Client(conString);
client.connect();
var query = client.query("SELECT * FROM test3");
//fired after last row is emitted

query.on('row', function(row) {
    console.log(row);
});

query.on('end', function() {
    client.end();
});
