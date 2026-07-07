// misz-masz — baner RODO: Google Analytics wczytujemy tylko po wyborze "wszystkie",
// wybór (rejected / necessary / granted) zapamiętujemy w localStorage żeby nie pytać przy każdej wizycie.
document.addEventListener("DOMContentLoaded", function () {
  var gaId = document.body.getAttribute("data-ga-id");
  if (!gaId) return;

  var STORAGE_KEY = "cookie-consent";
  var banner = document.getElementById("cookie-banner");

  function loadGoogleAnalytics() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + gaId;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", gaId);
  }

  var consent = localStorage.getItem(STORAGE_KEY);

  if (consent === "granted") {
    loadGoogleAnalytics();
    return;
  }

  if (consent === "necessary" || consent === "rejected") {
    return; // decyzja już podjęta, nie pokazujemy banera ponownie
  }

  if (!banner) return;
  banner.hidden = false;

  function decide(value) {
    localStorage.setItem(STORAGE_KEY, value);
    banner.hidden = true;
    if (value === "granted") loadGoogleAnalytics();
  }

  var acceptBtn = document.getElementById("cookie-accept");
  var necessaryBtn = document.getElementById("cookie-necessary");
  var rejectBtn = document.getElementById("cookie-reject");

  if (acceptBtn) acceptBtn.addEventListener("click", function () { decide("granted"); });
  if (necessaryBtn) necessaryBtn.addEventListener("click", function () { decide("necessary"); });
  if (rejectBtn) rejectBtn.addEventListener("click", function () { decide("rejected"); });
});
