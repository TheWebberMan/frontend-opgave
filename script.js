let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slides img');
let intervalId;

function showSlide(index) {
  currentSlide = index;
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function startSlideShow() {
  intervalId = setInterval(nextSlide, 4000);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

showSlide(0);
startSlideShow();

document.querySelectorAll('.controls button').forEach(button => {
  button.addEventListener('click', resetInterval);
});

function resetInterval() {
  stopSlideShow();
  startSlideShow();
}