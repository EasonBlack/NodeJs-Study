var frisby = require('frisby');

var URLInfo = 'http://localhost:3001/api/info';
var URLUser = 'http://localhost:3001/api/user';

frisby.create('Get Test api ')
    .get(URLUser)
    .expectJSONTypes({
        user: String
    })
    .expectJSON({
        user: "Eason"
    })
    .afterJSON(function (res) {
        expect(res.user).toEqual("Eason");
    })
    .toss();