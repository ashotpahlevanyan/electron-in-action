const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () => {
	console.log('Hello From Electron');
	mainWindow = new BrowserWindow();
	mainWindow.webContents.loadFile(__dirname + '/index.html');
});