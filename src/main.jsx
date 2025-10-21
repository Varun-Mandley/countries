import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Countrycarddetail from './components/Countrycarddetail.jsx'
import ErrorPage from './components/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {path:"/" , element: <Home/>},
      {
        path:"/:name" , 
        element: <Countrycarddetail/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
