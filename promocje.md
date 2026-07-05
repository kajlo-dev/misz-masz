---
layout: default
title: Promocje
permalink: /promocje/
description: "Aktualne kupony rabatowe misz-masz — pokaż na kasie i odbierz zniżkę."
---

<section class="page-hero">
  <div class="wrap">
    <span class="eyebrow">PROMOCJE</span>
    <h1>Kupony rabatowe</h1>
    <p>Pokaż ten ekran na kasie w sklepie, a dostaniesz zniżkę. Proste.</p>
  </div>
</section>


<section>
  <div class="wrap">
    {% assign dzisiaj = "now" | date: "%Y-%m-%d" %}
    {% assign aktywne = "" | split: "" %}
    {% for kupon in site.data.promocje %}
      {% if kupon.wygasa == "" or kupon.wygasa >= dzisiaj %}
        {% assign aktywne = aktywne | push: kupon %}
      {% endif %}
    {% endfor %}

    {% if aktywne.size > 0 %}
      <div class="coupon-grid">
        {% for kupon in aktywne %}
        <div class="coupon-card">
          <div class="coupon-badge">–{{ kupon.rabat }}</div>
          <div class="coupon-body">
            <h3>{{ kupon.tytul }}</h3>
            <p>{{ kupon.opis }}</p>
          </div>
          <div class="coupon-perforation"></div>
          <div class="coupon-footer">
            {% if kupon.wygasa != "" %}
              <span>Ważne do {{ kupon.wygasa | date: "%d.%m.%Y" }}</span>
            {% else %}
              <span>Bez limitu czasowego</span>
            {% endif %}
          </div>
        </div>
        {% endfor %}
      </div>
    {% else %}
  <div class="coupon-empty">
    <span class="coupon-empty-icon">🏷️</span>
    <h2>Dziś brak aktywnych kuponów</h2>
    <p>Zajrzyj tu ponownie — nowe promocje pojawiają się regularnie!</p>
    <a href="{{ '/' | relative_url }}" class="btn btn-secondary">Wróć na stronę główną</a>
  </div>
{% endif %}
  </div>
</section>
