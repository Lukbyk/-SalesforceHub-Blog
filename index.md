<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SalesforceHub - Praktyczne Porady i Wskazówki</title>
    <link rel="stylesheet" href="css/style.css"> <!-- Upewnij się, że ścieżka do Twojego pliku CSS jest poprawna -->
</head>
<body>

    <!-- Sticky Navigation -->
    <header class="sticky-nav">
        <div class="container">
            <nav id="main-menu">
                <a href="/" class="logo">SalesforceHub</a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/o-nas/">About us</a></li>
                    <li><a href="/dla-kogo/">Who is this for?</a></li>
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
                <h2>Najnowsze Artykuły</h2>
                
                <div class="articles-grid"> <!-- Nowy kontener dla siatki artykułów -->

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

                    <!-- Tutaj w przyszłości automatycznie pojawią się kolejne artykuły -->

                </div> <!-- Koniec .articles-grid -->

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

    <footer>
        <div class="container">
            <p>&copy; 2025 SalesforceHub. Wszelkie prawa zastrzeżone.</p>
        </div>
    </footer>

    <script>
        function searchPosts( ) {
            // Implementacja funkcji wyszukiwania
            alert("Funkcja wyszukiwania jeszcze nie zaimplementowana!");
        }
    </script>

</body>
</html>
