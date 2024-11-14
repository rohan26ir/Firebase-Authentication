import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Roots from './components/Roots/Roots';
import Github from './components/Account/Github/Github';
import Google from './components/Account/Google/Google';
import Login from './components/Account/LogIn/Login';
import Register from './components/Account/LogIn/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import SignUp from './components/Account/SignIn/SignUp';
import SignIn from './components/Account/SignIn/SignIn';
import Oder from './components/Privet/Oder';
import PrivetRoute from './routes/PrivetRoute';
import Profile from './components/Privet/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/google',
        element: <Google></Google>
      },
      {
        path: '/github',
        element: <Github></Github>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/oder',
        element: <PrivetRoute><Oder></Oder></PrivetRoute>
      },
      {
        path: '/profile',
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
