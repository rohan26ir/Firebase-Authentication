import React, { useState } from 'react';
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/FirebaseG';

const Github = () => {
  const [user, setUser] = useState(null);

  // const provider = new GoogleAuthProvider()
  const provider = new GithubAuthProvider

  const handleGithubIn =() =>{

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

  const handleGithubOut = () =>{
    signOut(auth)
    .then(() => {
      console.log("Sign out done");
      setUser(null)
    })
    .catch(error => console.log(error))

  }

  return (
    <div className='flex flex-col justify-center items-center space-y-5 my-16'>

      <h3 className='text-2xl font-bold text-white'>Simple <span className='border-b-2'>Sign in/out</span> Page</h3>

      <div className='flex justify-center items-center'>
         <div className='px-6 py-1 rounded-xl text-black bg-orange-500 hover:bg-orange-600' onClick={handleGithubIn}>Sign in with GitHub</div>
      </div>


      <div className='space-y-4 border-2 border-orange-600 p-5 rounded-lg'>
        <h2 className='text-center bg-rose-600 py-2 text-black font-bold'>Use Condition </h2>
        <div className='text-center'>
        <h2>If sign in then show sign out. <br />But if not "Sign in" then the "Sign out" Button will not show</h2>
        </div>

        <div>
          {
            user ? 
            <div className='flex justify-center items-center my-5'>
            <div className='px-6 py-1 rounded-xl text-black bg-blue-400 hover:bg-blue-600' onClick={handleGithubOut}>Sign Out</div>
            </div>
            :
            <div className='flex justify-center items-center'>
            <div className='px-6 py-1 rounded-xl text-black bg-blue-400 hover:bg-blue-600' onClick={handleGithubIn}>Sign in with GitHub</div>
            </div> 
            
          }
        </div>
      </div>

      <div>
        {
          user && <div>
            <div className='bg-white w-[300px] p-4 rounded-lg shadow-2xl'>
              <div className='flex justify-center'>
                <div className=''><img className='rounded-full h-28' src={user.photoURL} alt="" /></div>
              </div>
              <div className='text-black my-5'>
                <h3>Name: {user.displayName}</h3>
                <p>Email: {user.email}</p>
              </div>
          </div>

      <div className='flex justify-center items-center my-5'>
         <div className='px-6 py-1 rounded-xl text-black bg-orange-500 hover:bg-orange-600' onClick={handleGithubOut}>Sign Out</div>
      </div>
          </div>
        }
      </div>


    </div>
  );
};

export default Github;