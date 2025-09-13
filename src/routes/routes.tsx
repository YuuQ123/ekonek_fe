import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../features/homepage';
import { ErrorPage } from '../components/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;