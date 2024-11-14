import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {

  const {user} = useContext(AuthContext)
  const {displayName, photoURL, email} = user;
  return (
    <div>
       
       <div className='w-[50%] my-12 bg-white mx-auto p-5 rounded-lg'>
        <div className='flex justify-center'>
          <img 
          className='bg-slate-400 p-3 rounded-full my-3'
          src={photoURL} 
          alt="" />

        </div>
         
         <div className='text-gray-800'>
           <h2 className='text-xl font-bold'>Name: {displayName}</h2>
           <p className='text-xl font-bold'>Name: {email}</p>
         </div>
       </div>

    </div>
  );
};

export default Profile;