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
import Github from './components/Sign/Github/Github';
import Google from './components/Sign/Google/Google';
import Login from './components/Sign/LogIn/Login';
import Register from './components/Sign/LogIn/Register';
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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
