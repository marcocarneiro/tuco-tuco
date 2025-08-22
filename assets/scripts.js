document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  };

  const slideIdsToClick = ["capa", "intro", "slide1", "slide2", "slide6", "slide10", "slide11"];

  slideIdsToClick.forEach(id => {
    const slide = document.getElementById(id);
    if (slide) {
      slide.addEventListener("click", nextSlide);
    }
  });

  const rightParagraphs = document.querySelectorAll(".right");
  rightParagraphs.forEach(p => {
    p.addEventListener("click", nextSlide);
  });

  showSlide(currentSlide);
});