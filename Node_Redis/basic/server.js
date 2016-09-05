var redis = require('redis');
var client = redis.createClient(6379, '172.13.2.10');

client.on('connect', function () {
    console.log('connected');
});

client.get('foo', function (err, reply) {
    console.log(reply);
});