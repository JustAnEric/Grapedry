/* MUSIC IMPLEMENTATION FOR GRAPEOS */

/**
         * The code can be included in some JS file and included
         * via require or <script> in the renderer process
         */

const { ipcRenderer, app } = require('electron');
const ytdl = require('ytdl-core');

var audio;
var currentYtD;

function play() {
    // Some data that will be sent to the main process
    console.log(document.querySelector('input#youtube-search[type=text]').value);
    let Data = {
        query: document.querySelector('input#youtube-search[type=text]').value,
    };

    // Send information to the main process
    // if a listener has been set, then the main process
    // will react to the request !
    ipcRenderer.send('request-mainprocess-action-app', 'grab-youtube-video-search', Data);
}

function playVideoOrAudio(ytData) {
    const url = ytdl.filterFormats(ytData.formats, 'audioonly')[0].url;
    //audio = audio_module.openPlayer(app, url);
    ipcRenderer.send('audio_open_player', url);
    /*audio.load();
    document.body.appendChild(audio);
    audio.hidden = true;
    audio.play();*/
    currentYtD = ytData;
}

ipcRenderer.on('request-mainprocess-action-app-response', async(event, type, data) => {
    if (type === 'grab-youtube-video-search') {
        // play video
        console.log(data)
        var data = data;
        playVideoOrAudio(data);
        console.log(data);
    }
});