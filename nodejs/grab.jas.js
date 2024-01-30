const spawn = require('child_process').spawn;
const ytdl = require('ytdl-core');

async function getYTVd(query) {
    const sendData = {
        query: query
    }
    var stringedData = JSON.stringify(sendData);

    const py = spawn('python3', ['youtube-models/search.py', stringedData]);
    var message = '';

    py.stdout.on('data', function (sdata) {
      message += sdata.toString();
      console.log(sdata);
    });

    var info;
    global.info = info;

    py.stdout.on('end', async function () {
      console.log(`${message}: OUTPUT`);
      try {
        let resultData = await JSON.parse(message);
        let sum = JSON.stringify(resultData[0]['link']); 
        console.log(sum.replaceAll('"','')); 
        global.info = await ytdl.getInfo(sum.replaceAll('"',''));
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });

    async function waitForVariable() {
        return new Promise((resolve, reject) => {
          let intervalId = setInterval(() => {
            if (global.info !== undefined) {
              clearInterval(intervalId);
              resolve(global.info);
            }
          }, 100);
        });
    }

    await waitForVariable();    
    return global.info;
}

module.exports = {
    getYTVd
}