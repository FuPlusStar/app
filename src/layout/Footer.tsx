import React, { FC } from 'react';
import { Button } from "@/components/ui/button"

const Footer: FC = () => {


  return (
    <>
      <div className={'fixed bottom-0 bg-white w-full  ' }>
        <Button className={'h-5'} variant="outline">Button</Button>
        <Button className={'h-5'} variant="outline">Button</Button>
        <Button className={'h-5'} variant="outline">Button</Button>
      </div>


    </>
  );
};

export default Footer;
