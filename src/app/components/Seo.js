// components/Seo.js
// Dynamic SEO Component
const Seo = ({ title, description, image, url,canonical }) => {
  const defaultTitle = 'Default Title';
  const defaultDescription = 'Default description goes here.';
  // const defaultUrl = 'https://www.yourwebsite.com';
  const defaultImage = '/default-image.jpg';

  return (
    <div>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={url || defaultUrl} /> */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      {/* <link rel="canonical" href={canonical || url || defaultUrl} /> */}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:url" content={url || defaultUrl} /> */}
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </div>
  );
};

export default Seo;
