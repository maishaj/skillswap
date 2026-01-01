import React, { createContext, useEffect, useState} from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user,setUser]=useState([]);
  const [loading,setLoading]=useState(true);

  //Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Observer
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    })
    return()=>{
      unsubscribe();
    }
  },[]);

  //Logout
  const logout=()=>{
    return signOut(auth);
  }

  //Login
  const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  

  const authData = {
    createUser,
    user,
    setUser,
    logout,
    signIn,
    loading,
    setLoading,
  };


  return (
    <AuthContext value={authData}>{children}</AuthContext>
  );
};

export default AuthProvider;
