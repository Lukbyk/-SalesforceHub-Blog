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
      mainImage,
      "category": category->title,
      publishedAt
    }
  }`;

  try {
    const articles = await client.fetch(query);

    return articles.map(article => ({
      ...article,
      imageUrl: article.mainImage ? urlFor(article.mainImage).width(1200).url() : null,
      thumbnailUrl: article.mainImage ? urlFor(article.mainImage).width(400).url() : null,
      bodyHtml: article.body ? toHTML(article.body) : '',
      url: `/artykuly/${article.slug.current}/`,
    }));
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return [];
  }
};