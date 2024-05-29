import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
import { auth } from "../../public/firebase.config";

const provider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider()



export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const handelGoogleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }
    // signin github 
    const githubSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

    const handelLogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // register
    const handelRegister=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const updateProfileuser=(username,photourl)=>{
        return updateProfile(auth.currentUser, {
            displayName: username, photoURL: photourl
          })
    }
    const handellogin=(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }



    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)

        })
        return()=>{
            unsub();
        }
    },[])
    
    const value={handelGoogleSignIn,githubSignIn,setUser,loading,user,handelLogOut,handelRegister,updateProfileuser,handellogin}
    return (
        
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;