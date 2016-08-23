var pg = require('pg');
var conString = "postgres://eason:admin@172.13.2.10:5432/demo";

var client = new pg.Client(conString);
client.connect();

client.query({
    name: 'update test3',
    text: "update test3 set name=$1 where name='George'",
    values: ['George111']
}, function () {
    client.query('select * from test3', function (error, results) {
        console.log(results.rows);
        client.end();
    });
});
