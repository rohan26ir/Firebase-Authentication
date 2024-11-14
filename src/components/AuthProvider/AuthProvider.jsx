import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../Firebase/FirebaseG';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const name = 'sagor'

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo ={
    name,
    createUser,
    signInUser
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