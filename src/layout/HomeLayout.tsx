import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/layout/Footer.tsx';
import Header from '@/layout/Header.tsx';

const HomeLayout: FC = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
export default HomeLayout;
