function onScroll() {
    if (scrollY > 0 ) {
        topBar.classList.add('scroll')
    } else {
        topBar.classList.remove('scroll')
    }
    
    
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

