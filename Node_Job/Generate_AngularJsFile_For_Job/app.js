var fs = require('fs');
var dust = require('dustjs-linkedin');


var groupFile = 'templates/group.dust';
var itemFile = 'templates/item.dust';
var groupDust = fs.readFileSync(groupFile, "UTF-8");
var itemDust = fs.readFileSync(itemFile, "UTF-8");
var groupCompile = dust.compile(groupDust, 'group');
var itemCompile = dust.compile(itemDust, 'item');
dust.loadSource(groupCompile)
dust.loadSource(itemCompile)


var obj = {
    title: 'aaa',
    info: 'bbbbbbb',
    items: [
        {
            type: 'shop',
            id: 'id',
            name: 'ccccc'
        },
        {
            type: 'shop',
            id: 'shopname',
            name: 'shop name'
        },
    ]
}

dust.render('group', obj, function (err, html) {
    var stream = fs.createWriteStream("dist/my_html.html");
    stream.once('open', function(fd) {
        stream.write(html);
        stream.end();
    });
});