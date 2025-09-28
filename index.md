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
                <article class="post-card">
                    <a href="/artykuly/zarzadzanie-leadami/" class="post-link">
                        <div class="post-image-wrapper">
                            <img src="https://via.placeholder.com/300x200/007bff/ffffff?text=Lead+Management" alt="Lead management article thumbnail" class="post-thumbnail">
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">How to Effectively Manage Leads in Salesforce</h3>
                            <div class="post-meta">
                                <span class="post-category">📊 Lead Management</span>
                                <span class="post-date">December 28, 2024</span>
                            </div>
                            <p class="post-excerpt">Learn how to increase conversion and better organize your sales process with best practices for lead management in Salesforce...</p>
                        </div>
                    </a>
                </article>

                <article class="post-card">
                    <a href="/artykuly/optymalizacja-sprzedazy/" class="post-link">
                        <div class="post-image-wrapper">
                            <img src="https://via.placeholder.com/300x200/28a745/ffffff?text=Sales+Optimization" alt="Sales optimization article thumbnail" class="post-thumbnail">
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">Optimizing Sales Processes with Salesforce</h3>
                            <div class="post-meta">
                                <span class="post-category">🎯 Sales Optimization</span>
                                <span class="post-date">January 15, 2025</span>
                            </div>
                            <p class="post-excerpt">Discover key strategies and Salesforce tools that will help you streamline sales processes and achieve better results...</p>
                        </div>
                    </a>
                </article>
            </div>
        </section>
    </div>
</div>
