module.exports = function(eleventyConfig) {
  // Przekopiuj foldery css i js do folderu _site
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Ustawienie, aby Eleventy wiedziało, gdzie szukać plików
  return {
    dir: {
      input: ".", // Pliki źródłowe są w głównym folderze
      includes: "_includes", // Szablony są w _includes
      output: "_site" // Gotowa strona trafi do _site
    },
    // Umożliwia używanie HTML w plikach Markdown
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
