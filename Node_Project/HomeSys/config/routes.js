var seriesCtrl = require('../controller/series.ctrl');
var dailyCtrl = require('../controller/daily.ctrl');
var bookCtrl = require('../controller/book.ctrl');
var ItCtrl = require('../controller/it.ctrl');
var FilmCtrl = require('../controller/film.ctrl');
var ItemCtrl = require('../controller/item.ctrl');
var CurrentReadingCtrl = require('../controller/currentReading.ctrl');
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
    app.get('/daily-7/:date', dailyCtrl.Daily7DaysList);
    app.get('/daily-items-total', dailyCtrl.DailyItemsList);
    app.get('/daily-total', dailyCtrl.DailyListBySpan);


    app.get('/book/:refid', bookCtrl.getBookByRef);
    app.post('/book', bookCtrl.BookAdd);

    app.get('/currentreading', CurrentReadingCtrl.CurrentReadingList);
    app.post('/currentreading', CurrentReadingCtrl.CurrentReadingAdd);
    app.put('/currentreading/:id', CurrentReadingCtrl.CurrentReadingModifyById);

    app.get('/film', FilmCtrl.FilmList);
    app.get('/film/:refid', FilmCtrl.getFilmByRef);
    app.post('/film', FilmCtrl.FilmAdd);
    app.put('/film/:id', FilmCtrl.FilmUpdate);


    app.get('/it', ItCtrl.ITList);
    app.post('/it', ItCtrl.ITAdd);
    app.get('/it/:id', ItCtrl.getITById);

    app.get('/item/:id', ItemCtrl.getItemById);
    app.get('/itembyref/:id', ItemCtrl.getItemByRef);
    app.get('/item', ItemCtrl.List);
    app.post('/item', ItemCtrl.ItemAdd);
    app.put('/item/:id', ItemCtrl.ItemUpdateById);
    app.delete('/item/:id', ItemCtrl.ItemDeleteById);

}

