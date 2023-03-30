let slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".trusdedBy-companies-item");
  const dots = document.querySelectorAll(".circle-bg");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${200 * (slideIndex - 1)}%)`;
  });

  dots.forEach(dot => dot.classList.remove('active'));

  dots[slideIndex - 1].classList.add('active');
}


// для второй карусели
function currentSlideAward(n) {
  showSlidesAward(slideIndex = n);
}

function showSlidesAward(n) {
  const slides = document.querySelectorAll(".award-companies-item");
  const dots = document.querySelectorAll(".award-circle-bg");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${355 * (slideIndex - 1)}%)`;
  });

  dots.forEach(dot => dot.classList.remove('active'));

  dots[slideIndex - 1].classList.add('active');
}