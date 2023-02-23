import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css';
import routes from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// creamos el router
const router = createBrowserRouter(routes)

// englobar toda nuestra App con este router
root.render(
  <RouterProvider router={router} />
);
