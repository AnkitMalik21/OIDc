import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:9192",
  realm: "yt-dev",
  clientId: "auth-client"
});

let initialized = false;

export const initKeycloak = () => {
  if (!initialized) {
    initialized = true;
    return keycloak.init({
      onLoad: "check-sso",
      pkceMethod: "S256"
    });
  }
  return Promise.resolve(false);
};

export default keycloak;
