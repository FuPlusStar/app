import react, { FC } from 'react';
import Footer from '@/layout/Footer.tsx';
import Header from '@/layout/Header.tsx';

const Main: FC = () => {
  return (
    <>
      <Header></Header>
      <p>Main</p>
      <Footer></Footer>
    </>
  );
};
export default Main;
