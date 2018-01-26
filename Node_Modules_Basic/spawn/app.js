

var util = require("util");

var spawn = require("child_process").spawn;
var process = spawn('python',["python_demo.py"]);

util.log('readingin')

process.stdout.on('data',function(chunk){
    var textChunk = chunk.toString('utf8');// buffer to string
    util.log(textChunk);
});

process.on('exit', (code) => {
    console.log("Process quit with code : " + code);
});