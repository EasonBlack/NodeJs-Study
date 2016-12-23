var moment = require('moment');
var pg = require('pg');
var conString = "postgres://eason:admin@localhost:5432/demo";
var client = new pg.Client(conString);
client.connect();

var thisYear = moment().year();
var nextYear = thisYear + 1;
var thisYearDate =  `${thisYear}-01-01`;
var nextYearDate =  `${nextYear}-01-01`;
var params = [];
var chunks = [];
for (var m = moment(thisYearDate); m.isBefore(nextYearDate); m.add(1, 'days')) {
    var valueClause= [];
    params.push(m.format('YYYY-MM-DD'));
    valueClause.push('$' + params.length);
    params.push(Math.floor(Math.random()*10 + 1));
    valueClause.push('$' + params.length);
    chunks.push('(' + valueClause.join(', ') + ')')
}

client.query({
    text: 'INSERT INTO yeardata(name,num) values' + chunks.join(', '),
    values: params
}, function (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results.rowCount);
    client.end();
});