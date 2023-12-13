import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

// Header组件
interface Button {
  label: string;
  to: string;
  index: number;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const buttons: Button[] = [
    { label: '拉货', to: '/', index: 0 },
    { label: '搬家', to: '/Moving', index: 1 },
    { label: '长途大车', to: '/Interurbancoach', index: 2 },
    { label: '冷藏车', to: '/Coldcar', index: 3 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderOffset, setSliderOffset] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const setItemRef = (el: HTMLLIElement | null, index: number) => {
    itemRefs.current[index] = el;
  };

  const updateSliderPosition = (index: number) => {
    const currentItem = itemRefs.current[index];
    if (currentItem) {
      const { offsetWidth, offsetLeft } = currentItem;
      setSliderWidth(offsetWidth);
      setSliderOffset(offsetLeft);
    }
  };

  useEffect(() => {
    // 初始化滑块的位置到拉货按钮
    updateSliderPosition(0);
  }, []);

  const handleClick = (index: number,to:string) => {
    setCurrentIndex(index);
    updateSliderPosition(index);
    navigate(to)
  };

  return (
    <>
      <div className="relative bg-orange-500 h-16 flex items-end">
        <ul className="relative flex py-0.5 overflow-x-auto text-zinc-50 h-[82px] items-end">
          <li
            className="absolute w-[30px] h-[35px] bg-zinc-50 rounded-lg duration-200 bottom-[6px]"
            style={{
              width: `${sliderWidth+30}px`,
              transform: `translateX(${sliderOffset-15}px)`
            }}
          ></li>
          {buttons.map((button) => {
            return (
              <li
                key={button.index}
                onClick={() => handleClick(button.index,button.to)}
                className={`text-sm ml-2 mr-1.5 mt-0 mb-1 shrink-0 duration-200 font-bold z-10 ${
                  currentIndex === button.index ? 'text-orange-500' : ''
                }`}
                ref={(el) => setItemRef(el, button.index)}
              >
                {button.label}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
