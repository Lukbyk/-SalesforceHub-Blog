---
title: Home
layout: base.njk
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
            
            <article class="post-card">
                <div class="post-image">📊</div>
                <div class="post-content">
                    <h3 class="post-title">How to Effectively Manage Leads in Salesforce</h3>
                    <div class="post-meta">December 28, 2024</div>
                    <p class="post-excerpt">Learn best practices for lead management that will help you increase conversion and better organize your sales process...</p>
                    <a href="/artykuly/zarzadzanie-leadami/" class="read-more">Read more →</a>
                </div>
            </article>
            
            <!-- Tutaj w przyszłości automatycznie pojawią się kolejne artykuły -->

        </section>

        <aside class="sidebar">
            <h3>Article Categories</h3>
            <ul class="categories">
                <li><a href="#">📊 Lead Management</a></li>
                <li><a href="#">🎯 Opportunity Tracking</a></li>
            </ul>
        </aside>
    </div>
</div>
