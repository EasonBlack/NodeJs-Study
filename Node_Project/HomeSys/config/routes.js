var seriesCtrl = require('../controller/series.ctrl');
var dailyCtrl = require('../controller/daily.ctrl');
var multer = require('multer');


module.exports = function (app) {
    app.get('/series', seriesCtrl.SeriesList);
    app.get('/series/:id', seriesCtrl.GetSeriesById);
    app.post('/series', seriesCtrl.SeriesAdd);
    app.post('/series/:id', seriesCtrl.SeriesItemAdd);
    app.post('/series/:id/:itemid', seriesCtrl.SeriesItemModifyById);
    app.delete('/series/:id/:itemid', seriesCtrl.SeriesItemDeleteById);
    app.put('/series/:id', seriesCtrl.SetSeries);

    app.get('/daily/:date', dailyCtrl.DailyListByDate);
    app.post('/daily/:date', dailyCtrl.DailyAddItem);
    app.post('/daily/:date/:id', dailyCtrl.DailyModifyItem);
    app.delete('/daily/:date/:id', dailyCtrl.DailyDeleteItem);

}

