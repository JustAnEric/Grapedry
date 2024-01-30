async function sleep(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}
  
const root = document.querySelector('.root');
const body = document.querySelector('body');

(async()=>{
    for (var i = 0; i < 1; i+=0.01){
        await sleep(5);
        body.style.opacity = i;
    }
})();

setTimeout(async()=>{
    for (var i = 1; i > 0; i-=0.01){
        await sleep(5);
        root.style.opacity = i;
    }

    await sleep((5 / 1000 * 0.01));

    if (root.style.opacity <= 0.1) {
        window.location.assign('./index.html');
    }
},4000);