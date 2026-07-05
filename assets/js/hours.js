// misz-masz — godziny otwarcia pobierane z Google Business Profile (Places API New)
// Dane cache'owane w sessionStorage na 30 minut, żeby nie odpytywać API przy każdym kliknięciu.

(function () {
  var CACHE_KEY = "mm_hours_cache_v1";
  var CACHE_MS = 30 * 60 * 1000; // 30 minut

  var DAYS_PL = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

  document.addEventListener("DOMContentLoaded", function () {
    var badgeEls = document.querySelectorAll("[data-hours-badge]");
    var tableEls = document.querySelectorAll("[data-hours-table]");
    if (!badgeEls.length && !tableEls.length) return;

    var apiKey = document.body.getAttribute("data-places-key");
    var placeId = document.body.getAttribute("data-place-id");

    if (!apiKey || apiKey.indexOf("TWOJ_") === 0 || !placeId || placeId.indexOf("TWOJ_") === 0) {
      renderFallback();
      return;
    }

    getPlaceHours(apiKey, placeId)
      .then(renderHours)
      .catch(function () {
        renderFallback();
      });
  });

  function getPlaceHours(apiKey, placeId) {
    var cached = readCache();
    if (cached) return Promise.resolve(cached);

    var url = "https://places.googleapis.com/v1/places/" + placeId +
      "?fields=regularOpeningHours,currentOpeningHours,utcOffsetMinutes";

    return fetch(url, {
      headers: { "X-Goog-Api-Key": apiKey }
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Places API error");
        return res.json();
      })
      .then(function (data) {
        writeCache(data);
        return data;
      });
  }

  function readCache() {
    try {
      var raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (Date.now() - parsed.ts > CACHE_MS) return null;
      return parsed.data;
    } catch (e) {
      return null;
    }
  }

  function writeCache(data) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
    } catch (e) { /* brak miejsca / prywatne okno — pomijamy cache */ }
  }

  function renderHours(data) {
    var hours = data.currentOpeningHours || data.regularOpeningHours;

    // --- odznaka "otwarte/zamknięte" ---
    document.querySelectorAll("[data-hours-badge]").forEach(function (el) {
      if (!hours) { el.textContent = "Godziny: sprawdź na miejscu"; return; }
      var open = data.currentOpeningHours ? data.currentOpeningHours.openNow : null;
      if (open === true) {
        el.textContent = "● OTWARTE TERAZ";
        el.classList.add("hours-open");
      } else if (open === false) {
        el.textContent = "● ZAMKNIĘTE";
        el.classList.add("hours-closed");
      } else {
        el.textContent = "Zobacz godziny otwarcia";
      }
    });

    // --- pełna tabela godzin ---
    document.querySelectorAll("[data-hours-table]").forEach(function (el) {
      if (!hours || !hours.weekdayDescriptions) {
        el.innerHTML = "<p>Aktualne godziny znajdziesz na naszej wizytówce Google.</p>";
        return;
      }
      var rows = hours.weekdayDescriptions.map(function (line) {
        var parts = line.split(": ");
        var day = parts[0];
        var range = parts.slice(1).join(": ");
        return "<tr><td>" + day + "</td><td>" + range + "</td></tr>";
      }).join("");
      el.innerHTML = "<table class=\"hours-table\"><tbody>" + rows + "</tbody></table>";
    });
  }

  function renderFallback() {
    document.querySelectorAll("[data-hours-badge]").forEach(function (el) {
      el.textContent = "Godziny: zobacz na Google Maps";
    });
    document.querySelectorAll("[data-hours-table]").forEach(function (el) {
      el.innerHTML = "<p>Godziny otwarcia zobaczysz na naszej " +
        "<a href=\"https://www.google.com/maps/place/misz-masz,+Rynek+39,+22-120+Wojs%C5%82awice\" target=\"_blank\" rel=\"noopener\">wizytówce Google</a>.</p>";
    });
  }
})();