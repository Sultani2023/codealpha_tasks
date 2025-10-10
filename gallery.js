let slideIndex = 1; // start from 1

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; // safety check

    // wrap around if n is out of bounds
    if (n > slides.length) { slideIndex = 1; }
    else if (n < 1) { slideIndex = slides.length; }
    else { slideIndex = n; }

    // hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // show current slide
    slides[slideIndex - 1].style.display = "block";
    if (dots.length) dots[slideIndex - 1].className += " active";

    // auto slide
    setTimeout(() => showSlides(slideIndex + 1), 5000);
}

// next/prev buttons
function plusSlides(n) {
    showSlides(slideIndex + n);
}

// dots
function currentSlide(n) {
    showSlides(n);
}
