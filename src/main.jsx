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
import MyPayBillsLayout from './layout/MyPayBillsLayout.jsx';
import MyPayBillList from './components/MyPayBillList.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { ThemeProvider } from 'next-themes'



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
    path:'/myPayBills',
    element:<MyPayBillsLayout></MyPayBillsLayout>,
    children:[{
      index:true,
      element:<MyPayBillList></MyPayBillList>
    }]
  },
  {
    path:'/billsDetails/:id',
    loader:({params})=>fetch(`https://bill-management-api-server.vercel.app/billsDetails/${params?.id}`),
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
  },
  {  
    path: '*',
    element:<ErrorPage></ErrorPage>,    
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme='light'>
        <RouterProvider router={router} />
      </ThemeProvider>
     </AuthProvider>
  </StrictMode>,
)
