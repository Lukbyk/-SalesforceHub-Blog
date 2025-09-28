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
            <h2>Latest Articles</h2>
            
            <div class="articles-grid">
                {%- for article in collections.articles -%}
                <article class="post-card">
                    <a href="{{ article.url }}" class="post-link">
                        <div class="post-image-wrapper">
                            <img src="{{ article.data.image or 'https://via.placeholder.com/300x200/3498DB/ffffff?text=' + (article.data.title | slug | upper) }}" alt="{{ article.data.title }} article thumbnail" class="post-thumbnail">
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">{{ article.data.title }}</h3>
                            <div class="post-meta">
                                <span class="post-category">{{ article.data.category or '📝 General' }}</span>
                                <span class="post-date">{{ article.data.date | readableDate }}</span>
                            </div>
                            <p class="post-excerpt">{{ article.data.excerpt or (article.templateContent | striptags | excerpt) }}</p>
                        </div>
                    </a>
                </article>
                {%- endfor -%}
            </div>
        </section>
    </div>
</div>
