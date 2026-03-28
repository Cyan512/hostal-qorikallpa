const environmentProd = {
  production: true,
  version: "PROD",

  app: {
    apiEndpoint: process.env.VITE_API_URL,
  },

  strapi: {
    apiEndpoint: process.env.NEXT_PUBLIC_STRAPI_URL,
  },
};

export default environmentProd;
