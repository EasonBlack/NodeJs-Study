var pg = require('pg');
var conString = "postgres://eason:admin@172.13.2.10:5432/demo";

var client = new pg.Client(conString);
client.connect();


client.query({
    name: 'insert test3',
    text: "INSERT INTO test3(name) values($1)",
    values: ['George']
});

client.query({
    name: 'insert test3',
    values: ['Paul']
});

var query = client.query("SELECT * FROM test3");

//can stream row results back 1 at a time
query.on('row', function(row) {
    console.log(row);
    console.log("name: %s", row.name);
});

//fired after last row is emitted
query.on('end', function() {
    client.end();
});
