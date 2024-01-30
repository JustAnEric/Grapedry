const { BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');

const openPlayer = async(main, url)=>{
    const win = new BrowserWindow({
        transparent: false,
        show: false,
        parent: main,
        webPreferences: {
            preload: path.join(__dirname,"preload.js"),
            contextIsolation: false,
            nodeIntegration: true
        },
        autoHideMenuBar: true,
    });
    win.hide();
    win.loadFile(path.join(__dirname,'invoke-audio.html'));

    ipcMain.on('get-audio', (event) => {
        event.reply('get-audio', url);
    });
};

module.exports = {
    openPlayer
}