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

  // --- lightbox: powiększanie zdjęcia po stuknięciu ---
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxClose = document.getElementById("lightbox-close");
  if (!lightbox || !lightboxImg) return;

  track.querySelectorAll("img").forEach(function (img) {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
