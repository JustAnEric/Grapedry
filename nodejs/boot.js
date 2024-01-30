async function sleep(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}
  
const root = document.querySelector('.root');
const body = document.querySelector('body');

(async()=>{
    await sleep(4000);
    /*for (var i = 0; i < 1; i+=0.01){
        await sleep(5);
        body.style.opacity = i;
    }*/
    root.insertAdjacentHTML('beforeend',`<small style="opacity:0;">grapeOS</small>`);
    for (var i = 0; i < 1; i+=0.01){
        await sleep(1);
        const c = document.querySelector('.root').lastChild;
        c.style.opacity = i;
    }
})();

setTimeout(async()=>{
    await sleep(5000);
    root.style.display = 'none';
    await sleep(3000);
    window.location.assign('./splash.html');
},4000);