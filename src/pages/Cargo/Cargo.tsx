import React, { FC, useEffect, useState } from 'react';
import SelectionBar from '@/pages/Cargo/SelectionBar.tsx';
import { useNavigate } from 'react-router-dom';
import ChooseLocation from '@/pages/Cargo/ChooseLocation.tsx';

const Cargo: FC = () => {
  // const navigate = useNavigate();
  //
  // const [poiaddress, setPoiaddress] = useState<string>('');
  //  //获取返回来的地址
  // useEffect(() => {
  //   const poiaddressFromLocal = localStorage.getItem('poiaddress');
  //   if (poiaddressFromLocal) {
  //     setPoiaddress(poiaddressFromLocal);
  //   }
  // }, []);
  return (
    <div className={'bg-[#f7f7f8]'}>
      <SelectionBar></SelectionBar>
      <ChooseLocation></ChooseLocation>
   <br/>
    </div>
  );
};
export default Cargo;
