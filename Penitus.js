const container = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 0;

function prevSlide() {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  updateCarousel();
}

function nextSlide() {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = container.clientWidth;
  slide.style.transform = `translateX(-${counter * slideWidth}px)`;
}

updateCarousel(); // Initial setup

// Optional: Automatically advance to the next slide every few seconds
// setInterval(nextSlide, 5000);
