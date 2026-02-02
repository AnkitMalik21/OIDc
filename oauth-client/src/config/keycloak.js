import Keycloak from "keycloak-js";

const keyClock = new Keycloak({
    url:'http://localhost:9192',
    realm:'yt-dev',
    clientId:'auth-client',
    pkceMethod : "S256",
});

export default keyClock;