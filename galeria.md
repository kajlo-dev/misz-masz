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
          <button class="carousel-arrow carousel-prev" aria-label="Poprzednie zdjęcie" data-carousel-prev>‹</button>
          <div class="carousel-track" id="carousel-track">
            {% for photo in photos %}
              <figure class="polaroid carousel-slide">
                <img src="{{ photo.path | relative_url }}" alt="Zdjęcie ze sklepu misz-masz" loading="lazy">
                <figcaption>misz-masz · Rynek 39</figcaption>
              </figure>
            {% endfor %}
          </div>
          <button class="carousel-arrow carousel-next" aria-label="Następne zdjęcie" data-carousel-next>›</button>
        </div>
        <p class="carousel-hint">Przesuń palcem albo użyj strzałek, żeby zobaczyć więcej zdjęć</p>
      {% else %}
        <p class="gallery-empty">
          Zdjęcia wkrótce! Wrzuć pliki do <code>/assets/images/galeria/</code>,
          a pojawią się tutaj automatycznie.
        </p>
      {% endif %}
    </div>
  </div>
</section>              <figcaption>misz-masz · Rynek 39</figcaption>
            </figure>
          {% endfor %}
        {% else %}
          <p class="gallery-empty">
            Zdjęcia wkrótce! Wrzuć pliki do <code>/assets/images/galeria/</code>,
            a pojawią się tutaj automatycznie.
          </p>
        {% endif %}
      </div>
    </div>
  </div>
</section>
