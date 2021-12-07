import React, { FC } from "react";
import { cn } from '@bem-react/classname';
import Button from "../../styled-components/Button/Button";
import './Section.scss';

const cnSection = cn('Section');
const cnNavigationBlock = cn('NavigationBlock');

type PropsT = {
  data: string;
  currentIndex: number;
  maxIndex: number;
  nextSection: () => void;
  prevSection: () => void;
}

const Section: FC<PropsT> = ({data, nextSection, prevSection, maxIndex, currentIndex}) => {

  return (
    <div className={cnSection()}>
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

export default Section;