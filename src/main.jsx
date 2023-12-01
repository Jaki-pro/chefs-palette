import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider } from 'react-router-dom';
import router from './routing/Routes.jsx'; 
import AuthProviders from './providers/AuthProviders.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>
  
  </React.StrictMode>,
)
