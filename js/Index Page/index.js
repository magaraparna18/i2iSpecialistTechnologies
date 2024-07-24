document.querySelector('.rs-menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.rs-menu').classList.toggle('d-none');
});

// Partner section 
$(document).ready(function(){
    $('.rs-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1, // Time between transitions (1 second)
        autoplayHoverPause: false, // Prevent pausing on hover
        smartSpeed: 2, // Speed of the transition
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
