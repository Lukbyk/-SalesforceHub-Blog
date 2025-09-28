---
title: "Home"
layout: "base.njk"
---

<section class="hero">
    <div class="container">
        <h1>Salesforce Hub</h1>
        <p>Practical tips, advice, and best practices for Salesforce users</p>
        <div class="search-bar">
            <input type="text" placeholder="Search articles, tutorials..." id="searchInput">
            <button class="search-btn" onclick="searchPosts()">🔍</button>
        </div>
    </div>
</section>

<div class="container">
    <div class="main-content">
        <section class="posts-section">
            <h2>Najnowsze Artykuły</h2>
            
            <div class="articles-grid">
                <article class="post-card">
                    <a href="/artykuly/zarzadzanie-leadami/" class="post-link">
                        <div class="post-image-wrapper">
                            <img src="https://via.placeholder.com/300x200/007bff/ffffff?text=Lead+Management" alt="Miniaturka artykułu o zarządzaniu leadami" class="post-thumbnail">
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">Jak Efektywnie Zarządzać Leadami w Salesforce</h3>
                            <div class="post-meta">
                                <span class="post-category">📊 Zarządzanie Leadami</span>
                                <span class="post-date">28 grudnia 2024</span>
                            </div>
                            <p class="post-excerpt">Dowiedz się, jak zwiększyć konwersję i lepiej zorganizować proces sprzedaży dzięki najlepszym praktykom zarządzania leadami w Salesforce...</p>
                        </div>
                    </a>
                </article>

                <article class="post-card">
                    <a href="/artykuly/optymalizacja-sprzedazy/" class="post-link">
                        <div class="post-image-wrapper">
                            <img src="https://via.placeholder.com/300x200/28a745/ffffff?text=Sales+Optimization" alt="Miniaturka artykułu o optymalizacji sprzedaży" class="post-thumbnail">
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">Optymalizacja Procesów Sprzedaży z Salesforce</h3>
                            <div class="post-meta">
                                <span class="post-category">🎯 Optymalizacja Sprzedaży</span>
                                <span class="post-date">15 stycznia 2025</span>
                            </div>
                            <p class="post-excerpt">Poznaj kluczowe strategie i narzędzia Salesforce, które pomogą Ci usprawnić procesy sprzedaży i osiągnąć lepsze wyniki...</p>
                        </div>
                    </a>
                </article>
            </div>
        </section>

        <aside class="sidebar">
            <h3>Kategorie Artykułów</h3>
            <ul class="categories">
                <li><a href="#">📊 Zarządzanie Leadami</a></li>
                <li><a href="#">🎯 Optymalizacja Sprzedaży</a></li>
                <li><a href="#">☁️ Cloud Computing</a></li>
            </ul>
        </aside>
    </div>
</div>
