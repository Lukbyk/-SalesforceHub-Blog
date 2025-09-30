---
title: "Home"
layout: "base.njk"
pagination:
  data: collections.articles
  size: 9
  alias: articles
permalink: "{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>Simplifying the Cloud for non-tech users</h1>
            <p>Practical Salesforce tips without the technical jargon</p>
            <a href="{{ collections.articles[0].url }}" class="cta-button">Read Latest Post</a>
        </div>
    </div>
</section>

<div class="container">
    <div class="main-content">
        <section class="posts-section">
            <h2>Latest Articles</h2>
            
            <div class="articles-grid">
                {%- for article in articles -%}
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

            {# Pagination Navigation #}
            {%- if pagination.pages.length > 1 -%}
            <nav class="pagination" aria-label="Pagination Navigation">
                <ul class="pagination-list">
                    {%- if pagination.previousPageHref -%}
                    <li class="pagination-item">
                        <a href="{{ pagination.previousPageHref }}" class="pagination-link">← Previous</a>
                    </li>
                    {%- endif -%}
                    
                    {%- for pageEntry in pagination.pages -%}
                    <li class="pagination-item">
                        <a href="{{ pagination.hrefs[loop.index0] }}" class="pagination-link {% if loop.index0 == pagination.pageNumber %}active{% endif %}">
                            {{ loop.index }}
                        </a>
                    </li>
                    {%- endfor -%}
                    
                    {%- if pagination.nextPageHref -%}
                    <li class="pagination-item">
                        <a href="{{ pagination.nextPageHref }}" class="pagination-link">Next →</a>
                    </li>
                    {%- endif -%}
                </ul>
            </nav>
            {%- endif -%}
        </section>
    </div>
</div>