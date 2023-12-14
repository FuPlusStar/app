import React, { FC, } from 'react';
import SelectionBar from '@/pages/Cargo/SelectionBar.tsx';
import ChooseLocation from '@/pages/Cargo/ChooseLocation.tsx';

const Cargo: FC = () => {

  return (
    <div className={'bg-[#f7f7f8]'}>
      <SelectionBar></SelectionBar>
      <ChooseLocation></ChooseLocation>
   <br/>
    </div>
  );
};
export default Cargo;
