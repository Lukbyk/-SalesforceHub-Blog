const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');
const {toHTML} = require('@portabletext/to-html');

const client = sanityClient.createClient({
  projectId: 'dj8fbxwy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// Lepsze opcje konwersji Portable Text
const portableTextComponents = {
  types: {
    image: ({value}) => {
      if (!value?.asset?._ref) {
        return ''
      }
      return `<img src="${urlFor(value).width(800).url()}" alt="${value.alt || ''}" />`
    },
  },
  marks: {
    link: ({children, value}) => {
      const href = value.href
      return `<a href="${href}" target="_blank" rel="noopener">${children}</a>`
    },
  },
  block: {
    h2: ({children}) => `<h2>${children}</h2>`,
    h3: ({children}) => `<h3>${children}</h3>`,
    normal: ({children}) => `<p>${children}</p>`,
    blockquote: ({children}) => `<blockquote>${children}</blockquote>`,
  },
  list: {
    bullet: ({children}) => `<ul>${children}</ul>`,
    number: ({children}) => `<ol>${children}</ol>`,
  },
  listItem: {
    bullet: ({children}) => `<li>${children}</li>`,
    number: ({children}) => `<li>${children}</li>`,
  },
}

module.exports = async function() {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "category": category->title,
    "categorySlug": category->slug.current,
    "author": author->name,
    mainImage,
    tags,
    body,
    "relatedArticles": relatedArticles[]-> {
      title,
      slug,
      excerpt,
      mainImage {
        asset-> {
          _id,
          url
        }
      },
      "category": category->title,
      publishedAt
    }
  }`;

  try {
    const articles = await client.fetch(query);

    return articles.map(article => ({
      ...article,
imageUrl: article.mainImage ? urlFor(article.mainImage).width(1200).fit('max').url() : null,
      thumbnailUrl: article.mainImage ? urlFor(article.mainImage).width(400).url() : null,
      bodyHtml: article.body ? toHTML(article.body, {components: portableTextComponents}) : '',
      url: `/artykuly/${article.slug.current}/`,
      // Mapujemy również powiązane artykuły, aby miały poprawne URL obrazów
      relatedArticles: article.relatedArticles ? article.relatedArticles.map(related => ({
        ...related,
        imageUrl: related.mainImage ? urlFor(related.mainImage).width(400).url() : null
      })) : []
    }));
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return [];
  }
};