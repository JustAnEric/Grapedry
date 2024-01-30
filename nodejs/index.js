// screen:
// 240 x 240
// 2.5 x 2.5 inches
const { app, BrowserWindow, ipcMain } = require('electron');
const ytdl = require('ytdl-core');
//const { exec,spawn } = require('child_process');
const { getYTVd } = require('./grab.jas');
const { openPlayer } = require('./audio-support/index');

(async () => {
  app.whenReady().then(() => {
    const win = new BrowserWindow({
      title: 'GrapeDry',
      frame: false,
      width: 320,
      height: 240,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    });

    win.loadFile('grapepod-boot.html');

    ipcMain.on('audio_open_player', (event, url)=>{
      console.log("Playing audio in separate and isolated window..");
      openPlayer(win,url);
    });

    ipcMain.on('request-mainprocess-action-app', async(event, action, data) => {
      if (action === 'grab-youtube-video-search') {
        function waitForElement(){
            if(typeof d !== "undefined"){
                //variable exists, do what you want
            }
            else{
                setTimeout(waitForElement, 250);
            }
        }
        
        console.log(`${data.query}`);
        var d = await getYTVd(data.query);
        event.reply('request-mainprocess-action-app-response', 'grab-youtube-video-search', d);
      }
    });
  });
})();
