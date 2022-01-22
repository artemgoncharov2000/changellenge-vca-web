import React, { FC } from "react";
import { cn } from '@bem-react/classname';
import Button from "../../styled-components/Button/Button";
import './Tab.scss';

const cnTab = cn('Tab');
const cnNavigationBlock = cn('NavigationBlock');

type PropsT = {
  data: string;
  currentIndex: number;
  maxIndex: number;
  nextSection: () => void;
  prevSection: () => void;
}

const Tab: FC<PropsT> = ({data, nextSection, prevSection, maxIndex, currentIndex}) => {

  return (
    <div className={cnTab()}>
      <div>{data}</div>
      <div className={cnNavigationBlock()}>
        <Button disabled={currentIndex === 0} label={"Назад"} onClick={prevSection}/>
        <Button
          disabled={currentIndex >= maxIndex}
          label={"Вперед"}
          onClick={nextSection}
          backgroundColor={"red"}
          textColor={"white"}
        />
      </div>
    </div>
  )
}

export default Tab;