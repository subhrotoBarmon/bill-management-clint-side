import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export let AuthContext=createContext(); 

const AuthProvider = ({children}) => {
    let [user,setUser]=useState(null);
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState('');
    let [showPassword,setShowPassword]=useState(false);

    const provider = new GoogleAuthProvider();
    let signInWithGoogle=()=>{
        setUser(true);
      return signInWithPopup(auth,provider);
    }

    let createRegistration=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }

    let login=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
    }
    
    let logOut=()=>{
        setLoading(true);
       return signOut(auth)
    }

    useEffect(()=>{
        let unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    let authInfo={
        user,setUser,
        loading,setLoading,
        createRegistration,
        logOut,login,
        signInWithGoogle,
        error,setError,
        showPassword,setShowPassword
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;