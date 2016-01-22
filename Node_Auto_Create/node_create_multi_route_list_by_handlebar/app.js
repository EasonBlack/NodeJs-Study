var fs = require('fs');
var Handlebars = require('handlebars');
var _ = require('lodash');


var catagoryObj = {
    'card':  {
        titleName : 'Card Manager',
        headers : '20%,Title1,title|30%,StartTime1,startTime|30%,EndTime1,endTime|10%,Status1,status'
    },
    'banner': {
        titleName: 'Banner Manager',
        headers : '20%,Title2,title|30%,StartTime2,startTime|30%,EndTime2,endTime|10%,Status2,status'
    }
}
var catagory = _.keys(catagoryObj)
var routes = [];
var listjs = [];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


_.each(catagoryObj,function(c,key){
    listjs.push(
        {
            name : key,
            controllerName : key.capitalize(),
            headers : function(){
                var headers = _.map(c.headers.split('|'),function(h){
                    return {
                        width: h.split(',')[0],
                        title: h.split(',')[1],
                        property: h.split(',')[2],
                    }
                })
                return headers;
            }
        }
    )
})

_.each(catagory,function(c){
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
var routetemplate  = Handlebars.compile(source);
var routeResult = routetemplate(dataSet);
var routeStream = fs.createWriteStream("dist/route.js");
routeStream.once('open', function(fd) {
    routeStream.write(routeResult);
    routeStream.end();
});


//list html create
_.each(catagoryObj,function(o, key){
    var file = 'template/app_newfile_list_html.dust';
    var source = fs.readFileSync(file, "UTF-8");
    var template  = Handlebars.compile(source);
    var result = template(o);
    var stream = fs.createWriteStream("dist/"+key + "_list"+".html");
    stream.once('open', function(fd) {
        stream.write(result);
        stream.end();
    });
});

//list js create
_.each(listjs,function(o){
    console.log(o);
    var file = 'template/app_newfile_list_js.js';
    var source = fs.readFileSync(file, "UTF-8");
    var template  = Handlebars.compile(source);
    var result = template(o);
    var stream = fs.createWriteStream("dist/" + o.name + "_controller"+".js");
    stream.once('open', function(fd) {
        stream.write(result);
        stream.end();
    });
});








