var fs = require('fs');
var dust = require('dustjs-linkedin');
var _ = require('lodash');


var catagoryObj = {
    'card':  {
        titleName: 'Card Manager'
    },
    'banner': {
        titleName: 'Banner Manager'
    }
}
var catagory = _.keys(catagoryObj)
var routes = [];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


_.each(catagory,function(c){
    console.log(c,c.capitalize());
    routes.push(
        {
            name : c,
            route: '/'+c ,
            controllerName : c.capitalize(),
            filename: c
        }
    )
    routes.push(
        {
            name : c,
            route: '/'+ c + '/:id',
            controllerName : c.capitalize() +'Edit',
            filename: c+'_edit'
        }
    )
})



var dataSet = {
    basePath: '/console/interface',
    routes : routes
}


// route create
var file = 'template/app_newfile_route.dust';
var source = fs.readFileSync(file, "UTF-8");
var compile = dust.compile(source, 'route');
dust.loadSource(compile)
dust.render('route', dataSet, function (err, html) {
    var stream = fs.createWriteStream("dist/route.js");
    stream.once('open', function(fd) {
        stream.write(html);
        stream.end();
    });
});

//list html create
_.each(catagoryObj,function(o, key){
    var file = 'template/app_newfile_list_html.dust';
    var source = fs.readFileSync(file, "UTF-8");
    var compile = dust.compile(source, 'list_html_'+key);
    dust.loadSource(compile)
    dust.render('list_html_'+key, o, function (err, html) {
        var stream = fs.createWriteStream("dist/"+key + "_list"+".html");
        stream.once('open', function(fd) {
            stream.write(html);
            stream.end();
        });
    });
})





