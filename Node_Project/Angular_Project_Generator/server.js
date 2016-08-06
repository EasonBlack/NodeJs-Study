var folderCreator = require('./creator_folder');

var indexPage = require('./creator_index/create')
indexPage.create();

folderCreator.addFolder('./dist/app');

var appModule = require('./creator_angular/create');
appModule.createAppJs();
appModule.createAppCtrlJs();