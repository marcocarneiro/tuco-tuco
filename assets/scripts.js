const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: true,
});

// função para mostrar feedback
function showFeedback(type, message, callback) {
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback-overlay " + type;
  feedback.textContent = message;
  feedback.style.display = "flex";

  setTimeout(() => {
    feedback.style.display = "none";
    if (callback) callback();
  }, 2000); // 2 segundos
}

// Bloqueia avanço automático em slides com perguntas
swiper.on("slideChangeTransitionStart", () => {
  const currentSlide = swiper.slides[swiper.activeIndex];
  const hasQuestion = currentSlide.querySelector(".question");

  if (hasQuestion) {
    swiper.allowSlideNext = false;

    const right = currentSlide.querySelector(".right");
    const wrong = currentSlide.querySelector(".wrong");

    if (right) {
      right.onclick = () => {
        showFeedback("success", "Resposta Certa", () => {
          swiper.allowSlideNext = true;
          swiper.slideNext();
        });
      };
    }

    if (wrong) {
      wrong.onclick = () => {
        showFeedback("error", "Resposta Errada");
        // não avança, só mostra e volta pro mesmo slide
      };
    }
  } else {
    swiper.allowSlideNext = true;
  }
});

const showQuestion = (obj) => {
    let box = document.getElementById(obj).style.display = 'block';
  }





/* const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true, // permite swipe com o dedo
  });

  // Bloqueia avanço automático em slides com perguntas
  swiper.on("slideChangeTransitionStart", () => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const hasQuestion = currentSlide.querySelector(".question");

    if (hasQuestion) {
      // trava navegação
      swiper.allowSlideNext = false;

      // adiciona listeners nas respostas
      const right = currentSlide.querySelector(".right");
      const wrong = currentSlide.querySelector(".wrong");

      if (right) {
        right.onclick = () => {
          //Mosta
          swiper.allowSlideNext = true;
          swiper.slideNext();
        };
      }

      if (wrong) {
        wrong.onclick = () => {
          alert('Mostra aviso vermelho na tela');
        };
      }
    } else {
      swiper.allowSlideNext = true; // libera slides normais
    }
  });

  const showQuestion = (obj) => {
    let box = document.getElementById(obj).style.display = 'block';
  } */





/* document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      // 
      slide.classList.remove("active");
      slide.classList.remove("animate__animated");
      slide.classList.remove("animate__fadeIn");
      if (i === index) {
        slide.classList.add("active");
        slide.classList.add("animate__animated");
        slide.classList.add("animate__fadeIn");
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
}); */