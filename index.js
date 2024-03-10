const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {
  const win = new BrowserWindow(
    {
      webPreferences: {
        nodeIntegration: true,  
        preload: path.join(__dirname, 'preload.js')
      },
      width: 1280,
      height: 720,
      title: "My First App",
      autoHideMenuBar: true
    }
  )

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})