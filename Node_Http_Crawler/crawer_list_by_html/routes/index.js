var routes = {};

var home = require('./home');
var homeurl = require('./home-url');
var homecontent = require('./home-content');
routes.home = home;
routes.homeurl= homeurl;
routes.homecontent= homecontent;
module.exports = routes;