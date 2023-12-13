import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


type SelectionOption = {
  label: string;
  value: string;
};


// 合并两个选项数组，因为我们希望它们在同一行显示
const options: SelectionOption[] = [
  { label: '跑腿', value: 'paotui' },
  { label: '微面', value: 'weimian' },
  { label: '小面', value: 'xiaomian' },
  { label: '中面', value: 'zhongmian' },
  { label: '依维柯', value: 'yweike' },
  { label: '小货', value: 'xiaohuo' },
  { label: '中平板', value: 'zhongpingban' },
  { label: '中箱货', value: 'zhongxianghuo' },
  { label: '5米2', value: '/5m2' },
  { label: '6米8', value: '/6m8' },
  { label: '7米6', value: '/7m6' },
  { label: '9米6', value: '/9m6' },
  { label: '13米', value: '/13m8' },
  { label: '17米5', value: '/17m8' },
  // ... 其他尺寸选项
];

const SelectionBar: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
  const [displayImage, setDisplayImage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // 初始化时加载默认图片
    loadDisplayImage(options[0].value);
  }, []);

  const loadDisplayImage = async (imageValue: string) => {
    try {
      const imageModule = await import(`../../assets/images/${imageValue}.png`);
      setDisplayImage(imageModule.default);
    } catch (error) {
      console.error('Error loading image:', error);
      setDisplayImage(''); // 或设置为默认图片
    }
  };

  const handleOptionClick = async (option: SelectionOption) => {
    if (option.value.startsWith('/')) {
      navigate(option.value);
    } else {
      setSelectedOption(option.value);
      loadDisplayImage(option.value);
    }
  };
  const handleNext = () => {
    const currentIndex = options.findIndex((option) => option.value === selectedOption);
    const nextIndex = (currentIndex + 1) % options.length; // Calculate the next index in a circular manner
    const nextOption = options[nextIndex];

    if (nextOption.value.startsWith('/')) {
      navigate(nextOption.value);
    } else {
      setSelectedOption(nextOption.value);
      loadDisplayImage(nextOption.value);
    }
  };
  const handleLast = () => {
    const currentIndex = options.findIndex((option) => option.value === selectedOption);
    const lastIndex = (currentIndex - 1 + options.length) % options.length; // Calculate the previous index in a circular manner
    const lastOption = options[lastIndex];

    if (lastOption.value.startsWith('/')) {
      navigate(lastOption.value);
    } else {
      setSelectedOption(lastOption.value);
      loadDisplayImage(lastOption.value);
    }
  };
  return (
    <div className="flex flex-col bg-#f3f4f6">
      <div className="flex flex-wrap ml-[1px] pl-0">
        {options.map((option) => (
          <div
            key={option.value}
            className={`px-1 py-1 text-sm relative ${selectedOption === option.value ? 'font-bold' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
            {selectedOption === option.value && (
              <div className="absolute w-[0.4rem] h-[0.08rem] bg-orange-500 rounded mt-1 mx-auto left-0 right-0 bottom-[4px]"></div>
            )}
          </div>
        ))}
      </div>
      <div className={'bg-[#f7f7f8] h-[266px] relative  '}>
        {displayImage && <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"   alt='Display' src={displayImage} />}
        <button onClick={handleNext} className='absolute top-1/2 right-[0.05rem] mr-[-10px] pr-0 -translate-x-1/2 -translate-y-1/2 '> &gt;</button>
        <button onClick={handleLast} className='absolute top-1/2 left-2  -translate-x-1/2 -translate-y-1/2 '>a</button>
      </div>
    </div>
  );
};

export default SelectionBar;