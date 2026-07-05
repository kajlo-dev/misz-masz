// misz-masz — proste strzałki karuzeli galerii (przewijanie natywne + kliknięcia)
document.addEventListener("DOMContentLoaded", function () {
  var track = document.getElementById("carousel-track");
  if (!track) return;

  var prevBtn = document.querySelector("[data-carousel-prev]");
  var nextBtn = document.querySelector("[data-carousel-next]");

  function slideWidth() {
    var slide = track.querySelector(".carousel-slide");
    if (!slide) return 300;
    var style = window.getComputedStyle(slide);
    var gap = parseInt(window.getComputedStyle(track).columnGap || 24, 10);
    return slide.offsetWidth + gap;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      track.scrollBy({ left: -slideWidth(), behavior: "smooth" });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      track.scrollBy({ left: slideWidth(), behavior: "smooth" });
    });
  }
});
