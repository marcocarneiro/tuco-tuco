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

  const showMessage = (message, color) => {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-overlay";
    messageDiv.style.backgroundColor = color;
    const text = document.createElement("p");
    text.textContent = message;
    messageDiv.appendChild(text);
    document.body.appendChild(messageDiv);

    setTimeout(() => {
      document.body.removeChild(messageDiv);
      if (color === "#13c767") {
        nextSlide();
      }
    }, 2000);
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
    p.addEventListener("click", () => {
      showMessage("Resposta Certa", "#13c767");
    });
  });

  const wrongParagraphs = document.querySelectorAll(".wrong");
  wrongParagraphs.forEach(p => {
    p.addEventListener("click", () => {
      showMessage("Resposta Errada", "#ec3838");
    });
  });

  showSlide(currentSlide);
});