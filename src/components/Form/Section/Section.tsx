import React, { FC } from "react";
import { cn } from '@bem-react/classname';

const cnSection = cn('Section');

type PropsT = {
  data: string;
}

const Section: FC<PropsT> = ({data}) => {

  return (
    <div className={cnSection()}>
      <div>{data}</div>
    </div>
  )
}

export default Section;