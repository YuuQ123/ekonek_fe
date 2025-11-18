import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../features/homepage';
import LoginPage from '../features/LoginPage/LoginPage';
import RegisterPage from '../features/LoginPage/register';
import ForgotPassword from '../features/LoginPage/ForgotPassword';
import VerificationCode from '../features/LoginPage/VerificationCode';
import ResetPassword from '../features/LoginPage/ResetPassword';
import SetNewPassword from '../features/LoginPage/SetNewPassword';
import AdminPanel from '../features/AdminPannel/AdminPanel';
import AdminDashboard from '../features/AdminPannel/AdminDashboard';
import AddNewPackage from '../features/AdminPannel/AddNewPackage';
import UserTagihan from '../features/DashboardUser/UserTagihan';
import { ErrorPage } from '../components/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: '/verification-code',
    element: <VerificationCode />,
    errorElement: <ErrorPage />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: '/set-new-password',
    element: <SetNewPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: '/admin',
    element: <AdminPanel />,
    errorElement: <ErrorPage />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: '/admin/add-package',
    element: <AddNewPackage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <UserTagihan />,
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