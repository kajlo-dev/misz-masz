// misz-masz — karuzela galerii: slider po jednym zdjęciu, muśnięcia + przyciski,
// oraz lightbox (powiększenie) z obsługą tych samych muśnięć.
document.addEventListener("DOMContentLoaded", function () {
  var track = document.getElementById("carousel-track");
  if (!track) return;

  var slides = Array.prototype.slice.call(track.querySelectorAll(".carousel-slide"));
  var total = slides.length;
  if (total === 0) return;

  var current = 0;

  var prevBtn = document.querySelector("[data-carousel-prev]");
  var nextBtn = document.querySelector("[data-carousel-next]");
  var counter = document.getElementById("carousel-counter");

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxClose = document.getElementById("lightbox-close");

  function render() {
    track.style.transform = "translateX(-" + (current * 100) + "%)";
    if (counter) counter.textContent = (current + 1) + " / " + total;
    if (lightbox && lightbox.classList.contains("open")) {
      updateLightboxImage();
    }
  }

  function goTo(index) {
    current = (index + total) % total; // zapętlenie: z ostatniego na pierwsze i odwrotnie
    render();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  if (prevBtn) prevBtn.addEventListener("click", prev);
  if (nextBtn) nextBtn.addEventListener("click", next);

  // --- muśnięcia (swipe) na karuzeli ---
  addSwipeListener(track, next, prev);

  // --- lightbox ---
  function updateLightboxImage() {
    var img = slides[current].querySelector("img");
    if (img && lightboxImg) lightboxImg.src = img.src;
  }

  function openLightbox(index) {
    goTo(index);
    updateLightboxImage();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  slides.forEach(function (slide, index) {
    var img = slide.querySelector("img");
    if (!img) return;
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    // muśnięcia działają też w powiększeniu
    addSwipeListener(lightbox, next, prev);
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // --- pomocnicza funkcja: wykrywanie muśnięcia lewo/prawo ---
  function addSwipeListener(el, onSwipeLeft, onSwipeRight) {
    var startX = 0;
    var startY = 0;
    var tracking = false;

    el.addEventListener("touchstart", function (e) {
      var t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      tracking = true;
    }, { passive: true });

    el.addEventListener("touchend", function (e) {
      if (!tracking) return;
      tracking = false;
      var t = e.changedTouches[0];
      var deltaX = t.clientX - startX;
      var deltaY = t.clientY - startY;

      // ignoruj, jeśli ruch był bardziej pionowy niż poziomy (żeby nie łapać scrolla strony)
      if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX < 0) {
        onSwipeLeft(); // muśnięcie w lewo -> następne zdjęcie
      } else {
        onSwipeRight(); // muśnięcie w prawo -> poprzednie zdjęcie
      }
    }, { passive: true });
  }

  render();
});
