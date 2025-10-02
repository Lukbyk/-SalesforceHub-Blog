module.exports = function(eleventyConfig) {
  // Przekopiuj foldery css, js i images do folderu _site
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Ignoruj folder .history i pliki HTML w artykułach
  eleventyConfig.ignores.add(".history/**");
  eleventyConfig.ignores.add("artykuly/*.html");

  // Stwórz kolekcję artykułów (IGNORUJ PLIKI ZACZYNAJĄCE SIĘ OD _ lub __)
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("artykuly/*.md")
      .filter(item => {
        // Ignoruj drafty
        if (item.data.draft) return false;
        
        // Ignoruj pliki zaczynające się od _ lub __
        const filename = item.inputPath.split('/').pop();
        if (filename.startsWith('_')) return false;
        
        return true;
      })
      .sort((a, b) => {
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

  // Dodaj filtr dla ISO date (dla sitemap i meta tags)
  eleventyConfig.addFilter("dateToISO", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Reading time calculator
  eleventyConfig.addFilter("readingTime", (text) => {
    if (!text) return '1 min read';
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
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

  // Strip HTML tags for plain text
  eleventyConfig.addFilter("striptags", (text) => {
    if (!text) return '';
    return text.replace(/<[^>]*>/g, '');
  });

  // Dodaj filtr do generowania JSON-LD dla BlogPosting Schema
  eleventyConfig.addFilter("blogPostingSchema", (page, siteUrl = "https://salesforcedecoded.com") => {
    if (!page || !page.url) {
      return '';
    }

    if (page.url === "/" || !page.url.startsWith("/artykuly/")) {
      return '';
    }

    const url = siteUrl + page.url;
    const data = page.data || {};
    const imageUrl = data.image || `${siteUrl}/css/logo.png`;
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title || "Salesforce de-coded Article",
      "description": data.excerpt || "",
      "image": imageUrl,
      "datePublished": page.date || data.date,
      "dateModified": data.dateModified || page.date || data.date,
      "author": {
        "@type": "Person",
        "name": data.author || "Łukasz Byczkowski",
        "url": "https://www.linkedin.com/in/lukasz-byczkowski/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Salesforce de-coded",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/css/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };
    
    return JSON.stringify(schema, null, 2);
  });

  // Dodaj filtr do generowania JSON-LD dla Organization Schema
  eleventyConfig.addFilter("organizationSchema", (input) => {
    const siteUrl = input || "https://salesforcedecoded.com";
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Salesforce de-coded",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/css/logo.png`,
        "width": "600",
        "height": "60"
      },
      "description": "Practical tips, advice, and best practices for Salesforce end-users. Learn how to work smarter with Salesforce without technical complexity.",
      "founder": {
        "@type": "Person",
        "name": "Łukasz Byczkowski",
        "url": "https://www.linkedin.com/in/lukasz-byczkowski/"
      },
      "sameAs": [
        "https://www.linkedin.com/in/lukasz-byczkowski/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@salesforcedecoded.com",
        "contactType": "Customer Support"
      }
    };
    
    return JSON.stringify(schema, null, 2);
  });

  // Dodaj filtr do generowania JSON-LD dla BreadcrumbList Schema
  eleventyConfig.addFilter("breadcrumbSchema", (page, siteUrl = "https://salesforcedecoded.com") => {
    if (!page || !page.url || page.url === "/") {
      return '';
    }

    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ];

    if (page.url.startsWith("/artykuly/")) {
      const data = page.data || {};
      if (data.title) {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": data.title,
          "item": siteUrl + page.url
        });
      }
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };

    return JSON.stringify(schema, null, 2);
  });

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