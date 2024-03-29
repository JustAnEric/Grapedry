const timeElement = document.querySelector('h1.time');
const dateElement = document.querySelector('.date');
var t24hrf = 0;
const root = document.querySelector('.root');

async function sleep(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}

(async()=>{
    for (var i = 0; i < 1; i+=0.01){
        await sleep(0.1);
        root.style.opacity = i;
    }
})();

setInterval(function() {
    var ampm = (new Date().getHours() >= 12) ? "PM" : "AM";
    var hours = (new Date().getHours() % 12) || 12;
    var mins = (new Date().getMinutes() < 10) ? "0" + new Date().getMinutes() : new Date().getMinutes();

    timeElement.innerHTML = hours + ":" + mins + "" + ampm;

    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    var month = (new Date().getMonth());
    var year = (new Date().getFullYear());
    var day = (new Date().getDay());
    var dayname = weekdays[day];
    var monthnum = (new Date().getDate());
    dateElement.innerHTML = `${dayname}, ${months[month]} ${monthnum}`;
}, 1000);
//hopefully that workslol

const openApp = async(appName)=>{
    for (var i = 1; i > 0; i-=0.01){
        await sleep(0.1);
        root.style.opacity = i;
    }
    await sleep((0.1 / 1000 * 0.01));
    location.assign(`./apps/${appName}.html`);
}
