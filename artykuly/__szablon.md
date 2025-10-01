---
title: "Tytuł artykułu"
layout: "article-layout.njk"
date: 2025-01-15
category: "📊 Kategoria"
excerpt: "Krótki opis artykułu do 150 znaków..."
image: "/images/nazwa-obrazka.jpg"
author: "Łukasz Byczkowski"
tags: ["tag1", "tag2"]
relatedArticles:
  - "/artykuly/zarzadzanie-leadami/"
  - "/artykuly/opportunity-tracking/"
  - "/artykuly/email-automation/"
---

<nav aria-label="Breadcrumb" class="breadcrumb">
    <a href="/">Home</a> / 
    <span>{{ title }}</span>
</nav>

<h1 class="post-title">{{ title }}</h1>
<p class="post-meta">{{ date | readableDate }}</p>

<h2>Główny problem</h2>
<p>Wprowadzenie...</p>

<div class="highlight-box">
    <p><strong>Kluczowa wskazówka:</strong> ...</p>
</div>

<h3>1. Pierwszy punkt</h3>
<p>Treść...</p>

<h3>2. Drugi punkt</h3>
<p>Treść...</p>

<div class="highlight-box">
    <h3>💡 Pro Tip</h3>
    <p>Dodatkowa wskazówka na koniec...</p>
</div>