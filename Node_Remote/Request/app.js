var request = require('request');

request.post(
    'xxxxxxxx',
    { json:  {
      "name": 13
    }},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

