document.querySelector('.rs-menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.rs-menu').classList.toggle('d-none');
});
