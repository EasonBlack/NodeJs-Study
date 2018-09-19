const async = require('async');


async.parallel({
  one: function(callback) {
      callback(null, 'abc\n');
  },
  two: function(callback) {
      callback(null, 'xyz\n');
  }
}, function(err, results) {
  console.log(results)
  // results now equals to: results.one: 'abc\n', results.two: 'xyz\n'
});