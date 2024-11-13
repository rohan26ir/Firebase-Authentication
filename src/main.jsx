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
import Signout1 from './components/SignOut/Signout1/Signout1';
import Signin1 from './components/SignIn/Signin1/Signin1';
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
        path: '/signin',
        element: <Signin1></Signin1>
      },
      {
        path: '/signout',
        element: <Signout1></Signout1>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
