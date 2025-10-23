import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Components/Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true)
    const createUser =(email,password) =>{
      setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password) => {
       setLoading(true);
    return signInWithEmailAndPassword (auth,email,password)
  }
   const signInWihGoogle = () => {
    setLoading (true);
    return signInWithPopup(auth,googleProvider)
     
  }

    const signOutUser =() => {
    return signOut (auth)
  }

  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser,updateData)
  }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoading(false)
        });
    return ()=>{
        unsubscribe()
    }
    },[])

 
    const authData = {
        user,
        setUser,
        createUser,
        signIn,
         signOutUser,
         loading,
         setLoading,
         signInWihGoogle,
         updateUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;