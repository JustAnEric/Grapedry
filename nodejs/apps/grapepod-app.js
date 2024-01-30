const allPages = document.querySelectorAll('body div.root div.page');
const homeButton = document.querySelector('.top-root .start .home-symb');

const switchPage = async(new_page)=>{
    for (const i of allPages) {
        i.hidden = true;
        i.style.display = 'none';
    }

    try {
        const page = document.querySelector(`body div.root div.page.${new_page}`);
    } catch {
        return console.error(`PageManager: Page doesn't exist: ${new_page}`);
    }
    const page = document.querySelector(`body div.root div.page.${new_page}`);

    page.hidden = false;
    page.style.display = 'unset';
}

homeButton.addEventListener('click', async(e)=>{
    window.location.assign('../index.html');
});