const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.left-btn');
const nextButton = document.querySelector('.right-btn');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to each other
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

let currentIndex = 0;

// Function to move to a specific slide
const moveToSlide = (index) => {
    const amountToMove = slideWidth * index;
    track.style.transform = `translateX(-${amountToMove}px)`;
    currentIndex = index;
}

// Click right, move slide to the right
nextButton.addEventListener('click', () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) {
        moveToSlide(0);
    } else {
        moveToSlide(nextIndex);
    }
});

// Click left, move slide to the left
prevButton.addEventListener('click', () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        moveToSlide(slides.length - 1);
    } else {
        moveToSlide(prevIndex);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');

    const transitionLinks = document.querySelectorAll('.transition-link');
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.href;
            document.body.classList.remove('loaded');
            setTimeout(function() {
                window.location.href = href;
            }, 500); // Match this to the CSS transition duration
        });
    });
});
