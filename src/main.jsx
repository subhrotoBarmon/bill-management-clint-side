import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from './layout/HomeLayout.jsx';
import HomePage from './components/HomePage.jsx';
import BillLayout from './layout/BillLayout.jsx';
import AllBills from './components/AllBills.jsx';
import BillDetails from './pages/BillDetails.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Loading from './pages/Loading.jsx';
import PrivateProvider from './Provider/PrivateProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    hydrateFallbackElement:<Loading></Loading>,
    children:[
      {
      index:true,
      element:<HomePage></HomePage>
      }
  ]
  },
  {
    path:'/bills',
    element:<BillLayout></BillLayout>,
    children:[
      {
        index:true,
        element:<AllBills></AllBills>
      }
    ]
  },
  {
    path:'/billsDetails/:id',
    loader:({params})=>fetch(`http://localhost:3000/billsDetails/${params?.id}`),
    element:<PrivateProvider>
      <BillDetails></BillDetails>
    </PrivateProvider>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
