var fs = require('fs');
var _ = require('lodash');
var Handlebars = require('handlebars');

var file = 'templates/app_newfile_list_html.dust';
var source = fs.readFileSync(file, "UTF-8");
var template  = Handlebars.compile(source);
var result = template({titleName: 'xxxxx'});
var stream = fs.createWriteStream("dist/list.html");
stream.once('open', function(fd) {
    stream.write(result);
    stream.end();
});