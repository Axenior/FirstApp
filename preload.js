const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('info', "New Info")

// 
contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})

//
contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (titles) => ipcRenderer.send("set-title", titles)
})

//
contextBridge.exposeInMainWorld('electronAPIS', {
  openFile: () => ipcRenderer.invoke('dialog:openFile')
})