const environmentDev = {
  production: false,
  version: "DEV",

  app: {
    apiEndpoint: process.env.VITE_API_URL,
  },

  strapi: {
    apiEndpoint: process.env.NEXT_PUBLIC_STRAPI_URL,
  },
};

export default environmentDev;
