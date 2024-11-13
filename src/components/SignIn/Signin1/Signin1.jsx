import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/FirebaseG';

const Signin1 = () => {
  const [user, setUser] = useState(null);

  // const provider = new GoogleAuthProvider()
  const provider = new GoogleAuthProvider();

  const handleSignin1 =() =>{

    signInWithPopup(auth, provider)
    .then((result) => {

      console.log("Photo", result.user.photoURL);
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error =>{
      console.log("Errpr", error);
      setUser(null)
    });
  }

  const handleSignout1 = () =>{
    signOut(auth)
    .then(() => {
      console.log("Sign out done");
      setUser(null)
    })
    .catch(error => console.log(error))

  }

  return (
    <div className='flex flex-col justify-center items-center space-y-5 my-16'>

      <h3 className='text-2xl font-bold text-white'>Sign in page</h3>

      <div className='flex justify-center items-center'>
         <div className='px-6 py-1 rounded-xl text-black bg-orange-500 hover:bg-orange-600' onClick={handleSignin1}>Sign in with Google</div>
      </div>


      <div>
        {
          user && <div>
            <div className='bg-white w-[100%] p-4 rounded-lg shadow-2xl'>
              <div className='flex justify-center'>
                <div className=''><img className='rounded-full' src={user.photoURL} alt="" /></div>
              </div>
              <div className='text-black my-5'>
                <h3>Name: {user.displayName}</h3>
                <p>Email: {user.email}</p>
              </div>
          </div>

      <div className='flex justify-center items-center my-5'>
         <div className='px-6 py-1 rounded-xl text-black bg-orange-500 hover:bg-orange-600' onClick={handleSignout1}>Sign Out</div>
      </div>
          </div>
        }
      </div>


    </div>
  );
};

export default Signin1;