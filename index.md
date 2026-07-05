---
layout: default
title: Home
description: "misz-masz — sklep wielobranżowy w Wojsławicach, Rynek 39. Chemia, kosmetyki, ziemia, drobne AGD, GSM i drobiazgi z druku 3D."
---

{% assign dzisiaj = "now" | date: "%Y-%m-%d" %}
{% assign ma_promocje = false %}
{% for kupon in site.data.promocje %}
  {% if kupon.wygasa == "" or kupon.wygasa >= dzisiaj %}
    {% assign ma_promocje = true %}
  {% endif %}
{% endfor %}

{% if ma_promocje %}
<a href="{{ '/promocje/' | relative_url }}" class="promo-banner">
  <span class="promo-banner-icon">🔥</span>
  <span class="promo-banner-text">Masz aktywny kupon rabatowy! Zobacz i pokaż na kasie →</span>
</a>
{% endif %}

<section class="hero">
  <div class="wrap hero-inner">
    <div>
      <span class="eyebrow">RYNEK 39 · WOJSŁAWICE</span>
      <h1>Wpadnij na<br><span>misz-masz</span></h1>
      <p class="hero-lead">
        Kraina 1000 i jednego drobiazgu, prosto z rynku w Wojsławicach.
        Zapomniałeś ładowarki, kończy się płyn do naczyń, a doniczka na balkonie
        stoi pusta? Ogarniemy to w pięć minut.
      </p>
      <div class="hero-actions">
        <a href="{{ '/dojazd/' | relative_url }}" class="btn btn-primary">Jak do nas trafić</a>
        <a href="{{ '/o-nas/' | relative_url }}" class="btn btn-secondary">Poznaj sklep</a>
      </div>
    </div>
    <div class="hero-badge-wrap">
      <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Plakietka sklepu misz-masz" class="hero-badge">
    </div>
  </div>
</section>

<section>
  <div class="wrap section-center">
    <span class="eyebrow">Co u nas znajdziesz</span>
    <h2>Wszystko po trochu, wszystko na miejscu</h2>
    <p>Nie musisz jeździć do galerii handlowej — masz to wszystko na Rynku 39.</p>
  </div>

  <div class="wrap tag-grid">
    <div class="tag-card">
      <span class="tag-icon">🧴</span>
      <h3>Chemia gospodarcza</h3>
      <p>Płyny, proszki, odplamiacze — wszystko, co ogarnia bałagan.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">💄</span>
      <h3>Kosmetyki</h3>
      <p>Pielęgnacja i drobne kosmetyki na każdy dzień.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">🌱</span>
      <h3>Ziemia i doniczki</h3>
      <p>Ziemia do kwiatów i warzyw, doniczki w różnych rozmiarach.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">🎨</span>
      <h3>Pędzle i lakiery</h3>
      <p>Pędzle do malowania i lakiery w sprayu — do majsterkowania i napraw.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">🔌</span>
      <h3>Elektryka i AGD</h3>
      <p>Artykuły elektryczne i drobne AGD, gdy coś trzeba szybko wymienić.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">🧻</span>
      <h3>Higiena i toaletówka</h3>
      <p>Artykuły toaletowe i higieniczne zawsze pod ręką.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">🔋</span>
      <h3>Kabelki i ładowarki</h3>
      <p>Kabelki i ładowarki do telefonu — na wypadek, gdy bateria akurat siada.</p>
    </div>
    <div class="tag-card">
      <span class="tag-icon">🖨️</span>
      <h3>Drobiazgi z druku 3D</h3>
      <p>Małe gadżety i akcesoria prosto z drukarki 3D — unikat, jakiego nie kupisz wszędzie.</p>
    </div>
  </div>
</section>

<section class="cta-banner">
  <div class="wrap">
    <h2>Rynek 39, drzwi obok wszystkiego</h2>
    <p>Zero kolejek, zero szukania po piętrach. Wpadasz, bierzesz, wychodzisz.</p>
    <div class="hero-actions" style="justify-content:center; margin-top:22px;">
      <a href="{{ '/kontakt/' | relative_url }}" class="btn btn-secondary">Napisz do nas</a>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="wrap info-strip">
    <div class="info-card">
      <span class="eyebrow">Adres</span>
      <h3>Znajdziesz nas tu</h3>
      <p>{{ site.address_line1 }}<br>{{ site.address_line2 }}, Wojsławice<br>
      <a href="{{ '/dojazd/' | relative_url }}">Zobacz mapkę →</a></p>
    </div>
    <div class="info-card">
      <span class="eyebrow">Kontakt</span>
      <h3>Napisz albo zadzwoń</h3>
      <p><a href="mailto:{{ site.email }}">{{ site.email }}</a><br>
      <a href="tel:{{ site.phone | replace: ' ', '' }}">{{ site.phone_display }}</a></p>
    </div>
    <div class="info-card">
      <span class="eyebrow">O sklepie</span>
      <h3>Kto za tym stoi</h3>
      <p>Iwona Szewczyk i cały zespół misz-masz.<br>
      <a href="{{ '/o-nas/' | relative_url }}">Poznaj naszą historię →</a></p>
    </div>
  </div>
</section>
