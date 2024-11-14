import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  //
  const { signOutUser, user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log("User Sign Out");
    })
    .catch(Error => console.log("User Sign out Error", Error))
  }

  const navUrl = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/google"}>Google</NavLink>
      </li>
      <li>
        <NavLink to={"/github"}>GitHub</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Log in</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      <li>
        <NavLink to={"/signin"}>SignIn</NavLink>
      </li>
      <li>
        <NavLink to={"/signup"}>SignUp</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {navUrl}
            </ul>
          </div>
          <div className="flex items-center">
          {
            user ? 
            <>
              <p onClick={handleSignOut} className="mr-2 px-2 py-1 bg-blue-500 rounded-2xl text-black cursor-pointer">Sign Out</p>
              <span>{user.displayName}</span>
            </>
            : <Link to={'/signIn'}><div className="bg-blue-500 hover:bg-blue-700 text-black px-2 py-1 rounded-3xl">Sign in</div></Link>
          }
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navUrl}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {
              !user ? ' ' 
              :
              <img 
            className="h-8 w-8 rounded-full"
            src={user?.photoURL} 
            alt=""
            title="Profile image" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
