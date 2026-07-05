// misz-masz — obsługa formularza kontaktowego (Formspree)
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var action = form.getAttribute("action");
    if (!action || action.indexOf("TWOJ_ID") !== -1) {
      showStatus("err", "Formularz nie jest jeszcze podłączony. Napisz do nas bezpośrednio mailem — link obok.");
      return;
    }

    var data = new FormData(form);
    var submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = "Wysyłanie...";

    fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          showStatus("ok", "Dzięki! Wiadomość poszła w świat — odezwiemy się najszybciej jak się da.");
        } else {
          showStatus("err", "Coś nie zagrało. Spróbuj ponownie albo napisz na sklep@misz-masz.cc.");
        }
      })
      .catch(function () {
        showStatus("err", "Brak połączenia. Spróbuj ponownie albo zadzwoń: +48 570 357 621.");
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Wyślij wiadomość";
      });
  });

  function showStatus(type, message) {
    status.textContent = message;
    status.className = "form-status visible " + type;
  }
});