---
layout: default
title: Galeria
permalink: /galeria/
description: "Zdjęcia ze sklepu misz-masz w Wojsławicach — wnętrze i witryna na Rynku 39."
---

<section class="page-hero">
  <div class="wrap">
    <span class="eyebrow">GALERIA</span>
    <h1>Zobacz jak u nas jest</h1>
    <p>Kilka zdjęć ze sklepu — w środku i na zewnątrz.</p>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="gallery-board">
      {% assign photos = site.static_files | where_exp: "f", "f.path contains '/assets/images/galeria/'" %}
      {% if photos.size > 0 %}
        <div class="carousel" id="carousel">
          <div class="carousel-track" id="carousel-track">
            {% for photo in photos %}
              <div class="carousel-slide">
                <figure class="polaroid">
                  <img src="{{ photo.path | relative_url }}" alt="Zdjęcie ze sklepu misz-masz" loading="lazy">
                  <figcaption>misz-masz · Rynek 39</figcaption>
                </figure>
              </div>
            {% endfor %}
          </div>
          <div class="carousel-controls">
            <button class="carousel-arrow carousel-prev" aria-label="Poprzednie zdjęcie" data-carousel-prev>‹</button>
            <span class="carousel-counter" id="carousel-counter">1 / {{ photos.size }}</span>
            <button class="carousel-arrow carousel-next" aria-label="Następne zdjęcie" data-carousel-next>›</button>
          </div>
        </div>
        <p class="carousel-hint">Przesuń palcem albo stuknij zdjęcie, żeby powiększyć</p>

        <div class="lightbox" id="lightbox">
          <button class="lightbox-close" id="lightbox-close" aria-label="Zamknij powiększenie">×</button>
          <img src="" alt="Powiększone zdjęcie ze sklepu misz-masz" id="lightbox-img">
        </div>
      {% else %}
        <p class="gallery-empty">
          Zdjęcia wkrótce! Wrzuć pliki do <code>/assets/images/galeria/</code>,
          a pojawią się tutaj automatycznie.
        </p>
      {% endif %}
    </div>
  </div>
</section>
