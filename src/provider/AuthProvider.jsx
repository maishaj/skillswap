import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  return <AuthContext></AuthContext>;
  
};

export default AuthProvider;
