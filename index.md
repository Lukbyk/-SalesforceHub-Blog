<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SalesforceHub - Praktyczne Porady i Wskazówki</title>
    <link rel="stylesheet" href="css/style.css"> <!-- Upewnij się, że ścieżka do Twojego pliku CSS jest poprawna -->
</head>
<body>

    <!-- Sticky Navigation - Ten element będzie "lepki" -->
    <header class="sticky-nav">
        <div class="container">
            <nav id="main-menu">
                <a href="/" class="logo">SalesforceHub</a>
                <ul>
                    <li><a href="/">Strona Główna</a></li>
                    <li><a href="/artykuly/">Artykuły</a></li>
                    <li><a href="/o-nas/">O nas</a></li>
                    <li><a href="/dla-kogo/">Dla kogo</a></li> <!-- Zaktualizowany link -->
                </ul>
            </nav>
        </div>
    </header>

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

    <!-- Możesz dodać stopkę (footer) tutaj -->
    <footer>
        <div class="container">
            <p>&copy; 2025 SalesforceHub. All rights reserved.</p>
        </div>
    </footer>

    <!-- Możesz dodać pliki JavaScript tutaj, np. dla funkcji wyszukiwania -->
    <script>
        function searchPosts() {
            // Implementacja funkcji wyszukiwania
            alert("Funkcja wyszukiwania jeszcze nie zaimplementowana!");
        }
    </script>

</body>
</html>
