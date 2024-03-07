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
  intervalId = setInterval(nextSlide, 3000);
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
  // startSlideShow();
}






// e-mail service

// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   // these IDs from the previous steps
//     emailjs.sendForm('contact_service', 'contact_form', this)
//     .then(() => {
//       console.log('SUCCESS!');
//     }, (error) => {
//       console.log('FAILED...', error);
//     });
//   })
// }

//Tab menu start

function openTab(evt, tabName) {
    
    const isActive = document.getElementById(tabName).style.display === 'block';
  
    
    const tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(tabcontent => {
      tabcontent.style.display = 'none';
    });
  
    
    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(tablink => {
      tablink.classList.remove('active');
    });
  
    
    if (!isActive) {
      document.getElementById(tabName).style.display = 'block';
      evt.currentTarget.classList.add('active');
    }
  }

  //Vejrudsigt

  