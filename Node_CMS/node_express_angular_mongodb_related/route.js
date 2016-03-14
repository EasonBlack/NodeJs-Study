var contents = require('./controller/ContentController.js');

module.exports = function (app) {
    app.get('/', contents.index);

    app.get('/api/content', contents.getList);
    app.get('/api/content/:id', contents.getById);
    app.get('/api/content-multi/:ids', contents.getMultiContentByIds);
    app.put('/api/content/:id', contents.modify);
    app.post('/api/content', contents.add);

    app.delete('/api/content/:id', contents.delete);
}




