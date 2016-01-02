var fs = require('fs');
var dust = require('dustjs-linkedin');


var file = 'templates/app_newfile_with_template.1.dust';
var source = fs.readFileSync(file, "UTF-8");
var compile = dust.compile(source, 'temp');
dust.loadSource(compile)
dust.render('temp', {name: 'eason', id: '1'}, function (err, html) {
    var stream = fs.createWriteStream("dist/my_html.html");
    stream.once('open', function(fd) {
        stream.write(html);
        stream.end();
    });
});