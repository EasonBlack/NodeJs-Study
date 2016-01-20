var fs = require('fs');
var files = require('./app_delete_from_config.config.js').files;

//var files = [
//    'F:/Appconomy/anna_wang/Shimao_Server/.idea/workspace.xml',
//    'F:/Appconomy/anna_wang/Shimao_Server/mlife/log/development.log'
//]

for(var i= 0,ilen=files.length;i<ilen;i++){
    try {
        fs.accessSync(files[i], fs.F_OK);
        console.log('access');
        fs.unlinkSync(files[i]);

    } catch(e) {
        console.log('not exist');
    }
}
