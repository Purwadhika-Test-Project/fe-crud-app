import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

import { AuthContextType } from "../type";
import { AuthProviderProps } from "../interface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const info = Cookies.get("info");
    if (info) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (user: string) => {
    Cookies.set("info", user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("info");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
