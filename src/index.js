import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/Homepage';
import Footer from './components/Footer';
import Login from './components/HomePage/LoginPage';
import RegisterFormPage from './components/Register';
import AboutPage from './components/HomePage/AboutUsPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage></HomePage>,
  
    
  },
  // {
  //   path : "/saloon",
  //   element :<Login></Login>
  // },
  {
    path : "/Register",
    element : <RegisterFormPage></RegisterFormPage>
  },
  {
    path:"/Login",
    element : <Login></Login>
  },
  {
    path:"/About",
    element :<AboutPage></AboutPage>
  }

   
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
