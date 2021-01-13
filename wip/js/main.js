document.addEventListener('scroll', () => {
    if(window.scrollY == 0){
        document.getElementById('mdc-nav-container').classList.remove('is-scrolling')
    }else{
        document.getElementById('mdc-nav-container').classList.add('is-scrolling')
    }
});

function handleStartNavigate(){
    const navEl = document.getElementById('mdc-nav-container')
    navEl.classList.remove('home')
    navEl.classList.add('page')
    document.getElementById('mdc-home').textContent = ''
}

const swup = new Swup()

document.addEventListener('swup:clickLink', (event) => {
    const navEl = document.getElementById('mdc-nav-container')
    navEl.classList.remove('home')
    navEl.classList.add('page')
});