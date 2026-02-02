import axios from "axios";
import keycloak from "../config/keycloak";   // adjust path

const apiAxios = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const getProducts = async () => {

  await keycloak.updateToken(30);   // refresh token if expiring

  const result = await apiAxios.get("/products", {
    headers: {
      Authorization: `Bearer ${keycloak.token}`,
    }
  });

  return result.data;
};
