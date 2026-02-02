import keyClock from "./keycloak";
import { createContext,useContext,useState,useEffect } from "react";

//creating auth context
const AuthContext = createContext();

//creating auth provider
export const AuthProvider = ({children}) =>{
    <AuthContext.Provider
       value={{isAuthenticated: true,}}
    >
    {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

