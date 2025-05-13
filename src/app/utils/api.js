export const fetchFromStrapi = async (path) => {
    const STRAPI_URL = 'http://localhost:1337';
    const res = await fetch(`${STRAPI_URL}/api${path}?populate=*`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch from Strapi');
    }
  
    return res.json();
  };