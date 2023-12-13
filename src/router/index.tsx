import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '@/layout/HomeLayout.tsx';
import Cargo from '@/pages/Cargo/Cargo.tsx';
import Moving from '@/pages/Moving.tsx';
import NotFound from '@/pages/NotFound.tsx';
import InterurbanCoach from '@/pages/InterurbanCoach.tsx';
import ColdCar from '@/pages/ColdCar.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [

      {
        path: '/',
        element: <Navigate to="/cargo"/>
      },
      {
        path: '/cargo',
        element: <Cargo></Cargo>,
      },
      {
        path: '/moving',
        element: <Moving></Moving>,
      },
      {
        path: '/Interurbancoach',
        element: <InterurbanCoach></InterurbanCoach>,
      },
      {
        path: '/coldcar',
        element: <ColdCar></ColdCar>,
      },
      {
        path: '*',
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default router;
