/* Changes active tab from navigation bar. */
setActive = (currentElement) => {
    const currentActive = document.querySelector('.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    currentElement.classList.add('active');
}

/* Toggles display of the hamburger menu. */
toggleNav = () => {
    const nav = document.getElementById('vertical-nav-container');
    const display = window.getComputedStyle(nav).display;

    if (display == 'none') {
        nav.style.display = 'block';
    } else if (display == 'block') {
        nav.style.display = 'none';
    }
}

/* Closes the hamburger menu. */
closeNav = () => {
    const nav = document.getElementById('vertical-nav-container');
    nav.style.display = 'none';
}