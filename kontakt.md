---
layout: default
title: Kontakt
permalink: /kontakt/
description: "Skontaktuj się ze sklepem misz-masz w Wojsławicach — telefon, e-mail lub formularz kontaktowy."
---

<section class="page-hero">
  <div class="wrap">
    <span class="eyebrow">KONTAKT</span>
    <h1>Napisz, zadzwoń albo wpadnij</h1>
    <p>Wybierz, co Ci wygodniej — odpowiadamy szybko.</p>
  </div>
</section>

<section>
  <div class="wrap contact-grid">
    <div>
      <div class="contact-card">
        <span class="eyebrow">E-mail</span>
        <h3>Napisz do nas</h3>
        <a href="mailto:{{ site.email }}">{{ site.email }}</a>
      </div>
      <div class="contact-card">
        <span class="eyebrow">Telefon</span>
        <h3>Zadzwoń</h3>
        <a href="tel:{{ site.phone | replace: ' ', '' }}">{{ site.phone_display }}</a>
      </div>
      <div class="contact-card">
        <span class="eyebrow">Adres</span>
        <h3>Wpadnij osobiście</h3>
        <p style="font-family: var(--font-mono); margin:0;">{{ site.address_line1 }}<br>{{ site.address_line2 }}</p>
      </div>
      <div class="contact-card">
        <span class="eyebrow">Godziny otwarcia</span>
        <h3><span data-hours-badge>Sprawdzam godziny…</span></h3>
        <div data-hours-table>Ładowanie…</div>
      </div>
    </div>

    <form class="contact-form" id="contact-form" action="{{ site.formspree_id }}" method="POST">
      <div>
        <label for="name">Imię</label>
        <input type="text" id="name" name="name" placeholder="Jak się nazywasz?" required>
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="twoj@email.pl" required>
      </div>
      <div>
        <label for="message">Wiadomość</label>
        <textarea id="message" name="message" rows="5" placeholder="Napisz, o co chodzi..." required></textarea>
      </div>
      <div id="form-status" class="form-status" role="status"></div>
      <button type="submit">Wyślij wiadomość</button>
      <p class="form-note">Formularz wysyła wiadomość bezpośrednio na naszą skrzynkę. Możesz też napisać zwykłego maila.</p>
    </form>
  </div>
</section>