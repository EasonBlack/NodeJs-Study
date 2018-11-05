const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

var window = null;

global.sharedObject = {
  someProperty: 'Eason Test'
}

global.demoData = "dddddd"

app.on('ready', function() {
  window = new BrowserWindow({width: 800, height: 600});
  window.loadURL('file://' + __dirname + '/index.html');
  window.openDevTools();
  window.on('closed', function(){
    window = null;
  });
});

