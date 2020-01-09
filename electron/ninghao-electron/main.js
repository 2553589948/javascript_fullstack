const {app, BrowserWindow, ipcMain} = require('electron')
// electron内置了窗口

ipcMain.on('greet', (event, args) => {
  console.log(args)
  event.sender.send('greet', {
    message: 'hi renderer!'
  })
})

const path = require('path')
//让electron支持热更新
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let win // 窗口

const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    backgroundColor: '#f8f8f8',
    webPreferences: {
      nodeIntegration: true
    }
  })
  // win.loadURL(`file://${__dirname}/main.html`)
  // win.loadURL('http://www.meituan.com')
  win.loadURL("http://localhost:3001")
}

app.on('ready', createWindow)