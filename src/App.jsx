import React from 'react'
import './App.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './components/Dashboard'
import TransactionPage from './components/Transactions/TransactionPage';
import SupportPage from './components/Support/SupportPage';
import AppWrapper from './CHAKRA/AppWrapper';





export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWrapper> <Dashboard/></AppWrapper>
    },
    {
      path: "/transactions",
      element:<AppWrapper> <TransactionPage/> </AppWrapper>
    },
    {
      path: "/support",
      element:<AppWrapper> <SupportPage/></AppWrapper>
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
  
    </>
     
    
  )
}
