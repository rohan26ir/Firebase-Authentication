import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FirebaseG';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const name = 'sagor'

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }


  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if(currentUser){
        console.log("currentUser logged user", currentUser);
        setUser(currentUser)
        setLoading(false)
      }
      else{
        console.log("No Useer log in");
        setUser(null)
      }
    })

    return () => {
      unSubscribe();
    }

  },[])

  const authInfo ={
    name,
    createUser,
    signInUser,
    user,
    signOutUser,
    loading
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default AuthProvider;