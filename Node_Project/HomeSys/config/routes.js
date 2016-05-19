var seriesCtrl = require('../controller/series.ctrl');
var dailyCtrl = require('../controller/daily.ctrl');
var bookCtrl = require('../controller/book.ctrl');
var ItCtrl = require('../controller/it.ctrl');
var multer = require('multer');


module.exports = function (app) {
    app.get('/series', seriesCtrl.SeriesList);
    app.get('/series/:id', seriesCtrl.GetSeriesById);
    app.get('/series/items/:refid', seriesCtrl.GetSeriesItemByrefId);
    app.post('/series', seriesCtrl.SeriesAdd);
    app.post('/series/:id', seriesCtrl.SeriesItemAdd);
    app.post('/series/:id/:itemid', seriesCtrl.SeriesItemModifyById);
    app.delete('/series/:id/:itemid', seriesCtrl.SeriesItemDeleteById);
    app.put('/series/:id', seriesCtrl.SetSeries);

    app.get('/daily/:date', dailyCtrl.DailyListByDate);
    app.post('/daily/:date', dailyCtrl.DailyAddItem);
    app.post('/daily/:date/:id', dailyCtrl.DailyModifyItem);
    app.delete('/daily/:date/:id', dailyCtrl.DailyDeleteItem);


    app.get('/book/:refid', bookCtrl.getBookByRef);
    app.post('/book', bookCtrl.BookAdd);

    app.get('/it', ItCtrl.ITList);
    app.post('/it', ItCtrl.ITAdd);

}

