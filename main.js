const path = require('path'); 
const { app, BrowserWindow } = require('electron');

require('electron-reload')([
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'styles.css'),
  path.join(__dirname, 'script.js'),
  // add other files/folders you want to watch here
], {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  ignored: /main\.js/,
});

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 340,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  
  win.setMenuBarVisibility(false);
  win.removeMenu();


  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
