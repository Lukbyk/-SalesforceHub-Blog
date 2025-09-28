module.exports = function(eleventyConfig) {
  // Przekopiuj foldery css i js do folderu _site
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Stwórz kolekcję artykułów
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("artykuly/*.md").sort((a, b) => {
      // Sortuj od najnowszych do najstarszych
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  // Dodaj filtr do formatowania daty
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateObj).toLocaleDateString('en-US', options);
  });

  // Dodaj filtr do skrócenia tekstu (excerpt)
  eleventyConfig.addFilter("excerpt", (text, limit = 150) => {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  });

  // Dodaj filtr do slug-a (URL-friendly)
  eleventyConfig.addFilter("slug", (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  // Ustawienia folderu
  return {
    dir: {
      input: ".", 
      includes: "_includes", 
      output: "_site" 
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
