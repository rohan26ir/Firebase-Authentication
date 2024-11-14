import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FirebaseG';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const name = 'sagor'

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  // onAuthStateChanged(auth, currentUser => {
  //   if(currentUser){
  //     console.log("currentUser logged user", currentUser);
  //     setUser(currentUser)
  //   }
  //   else{
  //     console.log("No Useer log in");
  //     setUser(null)
  //   }
  // })


  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if(currentUser){
        console.log("currentUser logged user", currentUser);
        setUser(currentUser)
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
    signOutUser
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