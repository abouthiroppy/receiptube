'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  // mainWindow = new BrowserWindow({width: 1000, height: 800, 'node-integration': false});
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  });
  mainWindow.loadUrl('file://' + __dirname.split('js')[0] + 'html/index.html');
  // console.log('file://' + __dirname.split('js')[0] + 'html/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
