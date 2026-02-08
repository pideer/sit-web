setActive = (event, currentElement) => {
    event.preventDefault();

    // remove 'active' class from the previously active element
    const currentActive = document.querySelector('.active');
    if (currentActive) {
    currentActive.classList.remove('active');
    }

    // add 'active' class to the clicked element
    currentElement.classList.add('active');
}
