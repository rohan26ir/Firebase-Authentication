import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h3>Log In Page</h3>



       <div>
          <Link to={'/register'}><div>Register Account</div></Link>
       </div>
    </div>
  );
};

export default Login;