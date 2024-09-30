import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './Form';
import Users from './Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />, 
  },
  {
    path: "/users", 
    element: <Users />, 
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

