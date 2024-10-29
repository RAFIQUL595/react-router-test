import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-center'>Hello world!</div>,
  },
  {
    path:"/about",
    element: <div>call me about section</div>
  },
  {
    path:"/contact",
    element: <div>Call me contact section</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
