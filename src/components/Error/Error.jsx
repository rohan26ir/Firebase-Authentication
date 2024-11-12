import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 my-12'>
      <h2>This Page is Not Found</h2>

      <div>
        <Link to={'/'}><button className='px-4 py-1 rounded-lg bg-white text-black font-bold'>Go back Home</button></Link>
      </div>
    </div>
  );
};

export default Error;