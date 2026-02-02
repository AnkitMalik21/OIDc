import toast from "react-hot-toast";
import keycloak, { initKeycloak } from "./keycloak";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycloakObject, setKeycloakObject] = useState(null);

  useEffect(() => {
    initKeycloak()
      .then((authenticated) => {
        setIsAuthenticated(authenticated);
        setKeycloakObject(keycloak);

        if (authenticated) {
          toast.success("Login Success");
        }
      })
      .catch((error) => {
        toast.error("Login Failed");
        console.error(error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      keycloak: keycloakObject
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
