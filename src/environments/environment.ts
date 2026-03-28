import environmentDev from "./environment.dev";
import environmentProd from "./environment.prod";

const environment =
  process.env.NODE_ENV === "production" ? environmentProd : environmentDev;

export default environment;
