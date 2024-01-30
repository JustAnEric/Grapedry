const { ipcRenderer } = require('electron');
const audio = document.querySelector('audio');

ipcRenderer.on('get-audio', (event, url) => {
    audio.src = url;
    audio.load();
    audio.onload = function(ev) {
        audio.play();
    }
});

audio.addEventListener('ended', async(ev)=>{
    window.close();
})

ipcRenderer.send('get-audio');