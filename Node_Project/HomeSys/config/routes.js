var appCtrl = require('../controller/server.ctrl');
var multer  = require('multer');


module.exports = function(app){
    app.get('/series', appCtrl.SeriesList );
    app.get('/series/:id', appCtrl.GetSeriesById );
    app.post('/series', appCtrl.SeriesAdd );
    app.post('/series/:id', appCtrl.SeriesItemAdd );
    app.post('/series/:id/:itemid', appCtrl.SeriesItemModifyById );
    app.delete('/series/:id/:itemid', appCtrl.SeriesItemDeleteById );
    app.put('/series/:id',appCtrl.SetSeries);
}

