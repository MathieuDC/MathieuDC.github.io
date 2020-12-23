document.addEventListener('scroll', () => {
    if($(window).scrollTop() == 0){
        document.getElementById('mdc-nav-container').classList.remove('is-scrolling')
    }else{
        document.getElementById('mdc-nav-container').classList.add('is-scrolling')
    }
});
