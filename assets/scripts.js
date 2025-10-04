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


