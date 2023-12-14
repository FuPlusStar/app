import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ChooseLocation: FC = () => {
  const navigate = useNavigate();

  const [value1, setvalue1] = useState<string>('');
  const [value2, setvalue2] = useState<string>('');
  // 初始化输入框的值
  useEffect(() => {
    const storedValue1 = localStorage.getItem('value1');
    const storedValue2 = localStorage.getItem('value2');
    if (storedValue1) setvalue1(storedValue1);
    if (storedValue2) setvalue2(storedValue2);
  }, []);

  // 获取返回来的地址
  useEffect(() => {
    const poiaddressFromLocal = localStorage.getItem('poiaddress');
    const inputField = localStorage.getItem('inputField');
    if (poiaddressFromLocal && inputField) {
      if (inputField === 'value1') {
        setvalue1(poiaddressFromLocal);
        localStorage.setItem('value1', poiaddressFromLocal);
      } else if (inputField === 'value2') {
        setvalue2(poiaddressFromLocal);
        localStorage.setItem('value2', poiaddressFromLocal);
      }
      localStorage.removeItem('poiaddress');
    }
  }, []);

  // 添加 onChange 处理函数，并保存新值到 localStorage
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setvalue1(event.target.value);
    localStorage.setItem('value1', event.target.value);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setvalue2(event.target.value);
    localStorage.setItem('value2', event.target.value);
  };
  return (
    <>
      <div className={'relative bg-white rounded h-18 w-[95%] mx-auto mb-2 pt-0.5 pb-1'}>
        <div className={'mt-0 py-1'}>

            <div className={'inline-flex absolute top-1 left-2 items-center justify-center rounded-full w-3 h-3 text-base text-white mt-2 bg-black'}>
              装
            </div>


          <input
            className={' w-[7rem] h-[1.5rem] rounded-sm bg-white  ml-[2rem] text-xl '}
            type="text"
            value={value1}
            onClick={() => {
              localStorage.setItem('inputField', 'value1'); // 设置标识符
              navigate('/map');
            }}
          />
        </div>
        <div className={'mt-0 px-2 '}>
          <div className={'inline-flex absolute items-center bottom-2 justify-center rounded-full w-3 h-3 text-base mt-2 bg-orange-500'}>
            卸
          </div>
          <input
            className={'w-[7rem] h-[1.5rem] ml-[1.5rem] rounded-sm bg-zinc-200 '}
            type="text"
            value={value2}
            onClick={() => {
              localStorage.setItem('inputField', 'value2'); // 设置标识符
              navigate('/map');
            }}
          />
        </div>
      </div>
    </>
  );
};
export default ChooseLocation;
