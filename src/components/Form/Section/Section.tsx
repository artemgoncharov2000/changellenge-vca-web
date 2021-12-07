import React, { FC } from "react";
import { cn } from '@bem-react/classname';
import Button from "../../styled-components/Button/Button";

const cnSection = cn('Section');

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
      <Button disabled={currentIndex === 0} label={"Назад"} onClick={prevSection}/>
      <Button disabled={currentIndex >= maxIndex} label={"Вперед"} onClick={nextSection}/>
    </div>
  )
}

export default Section;