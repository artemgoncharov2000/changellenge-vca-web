import React, { FC } from "react";
import { cn } from '@bem-react/classname';
import './Tab.scss';

type PropsT = {
  data: string;
  currentIndex: number;
  maxIndex: number;
  nextSection: () => void;
  prevSection: () => void;
}

const Tab: FC<PropsT> = (props) => {

  const {
      data,
      nextSection,
      prevSection,
      maxIndex,
      currentIndex,
      children,
  } = props;

  return (
    <div className={'tab'}>
        {children}
    </div>
  )
}

export default Tab;