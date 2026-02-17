/* Changes active tab as you scroll. */
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

let currSection = 'home';
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 80) {
            currSection = section.id;
        }
    });
    
    tabs.forEach(tab => {
        if (tab.href.includes(currSection)) {
            document.querySelector('.active').classList.remove('active');
            tab.classList.add('active');
        }
    });
});

/* Changes main text based on date. */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("home-header");
    const body = document.getElementById("home-body");

    const today = new Date();
    const beforeDate = new Date(today.getFullYear(), 0, 1); // jan 1
    const afterDate = new Date(today.getFullYear(), 3, 15); // apr 15
    today.setHours(0, 0, 0, 0);
    beforeDate.setHours(0, 0, 0, 0);
    afterDate.setHours(0, 0, 0, 0);

    if (today < beforeDate || today > afterDate) {
        header.innerHTML = "Confident Accounting for Business and Personal Clients";
        body.innerHTML = "Reliable bookkeeping, payroll, and tax services for businesses and individuals. Get started today!";
    } else {
        header.innerHTML = `Get Ahead of the ${today.getFullYear()} Tax Season`;
        body.innerHTML = `Prepare for the upcoming ${today.getFullYear()} tax year and contact us to get started!`;
    }
});


/* Changes active tab from navigation bar. */
setActive = (currentElement) => {
    const currentActive = document.querySelector('.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    currentElement.classList.add('active');
};

/* Toggles display of the hamburger menu. */
toggleNav = () => {
    const nav = document.getElementById('vertical-nav-container');
    const display = window.getComputedStyle(nav).display;

    if (display == 'none') {
        nav.style.display = 'block';
    } else if (display == 'block') {
        nav.style.display = 'none';
    }
};

/* Closes the hamburger menu. */
closeNav = () => {
    const nav = document.getElementById('vertical-nav-container');
    nav.style.display = 'none';
};